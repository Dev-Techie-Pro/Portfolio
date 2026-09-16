import { NextRequest, NextResponse } from "next/server";
import { getSiteId, getSupabaseAdmin } from "@/lib/supabase/admin";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  consent?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function makeSnippet(message: string): string {
  const compact = message.replace(/\s+/g, " ").trim();
  return compact.length > 120 ? `${compact.slice(0, 117)}...` : compact;
}

function clientIp(request: NextRequest): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp || null;
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email).toLowerCase();
  const subject = asTrimmedString(body.subject);
  const message = asTrimmedString(body.message);
  const consent = body.consent === true || body.consent === "true";

  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 400 },
    );
  }
  if (name.length > MAX_NAME) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (email.length > MAX_EMAIL) {
    return NextResponse.json({ error: "Email is too long." }, { status: 400 });
  }
  if (!subject) {
    return NextResponse.json(
      { error: "Please select what you're looking for." },
      { status: 400 },
    );
  }
  if (subject.length > MAX_SUBJECT) {
    return NextResponse.json(
      { error: "Subject is too long." },
      { status: 400 },
    );
  }
  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Message should be at least 10 characters." },
      { status: 400 },
    );
  }
  if (message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );
  }
  if (!consent) {
    return NextResponse.json(
      { error: "Please agree to the Privacy Policy to continue." },
      { status: 400 },
    );
  }

  try {
    const supabase = getSupabaseAdmin();
    const ip = clientIp(request);

    const { error } = await supabase.from("contact_messages").insert({
      site_id: getSiteId(),
      sender_name: name,
      sender_email: email,
      subject,
      snippet: makeSnippet(message),
      body: message,
      status: "new",
      sender_ip: ip,
    });

    if (error) {
      console.error("[contact] Supabase insert failed:", error.message);
      return NextResponse.json(
        { error: "Could not save your message. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
