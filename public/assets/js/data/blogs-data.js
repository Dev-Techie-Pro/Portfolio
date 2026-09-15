"use strict";

((window.Portfolio = window.Portfolio || {}),
  (window.Portfolio.BLOGS = {
    "building-scalable-rest-apis-with-net-core": {
      id: "building-scalable-rest-apis-with-net-core",
      title: "Building Scalable REST APIs with .NET Core",
      category: "Backend",
      date: "2026-01-15",
      dateLabel: "Jan 15, 2026",
      readTime: "8 min read",
      author: "M Sohaib Ishaque",
      image:
        "https://res.cloudinary.com/w3xvfqgt/image/upload/v1787743477/building-scalable-rest-apis-with-net-core.png",
      imageAlt: "Code on a laptop screen",
      excerpt:
        "A practical guide to structuring controllers, services, and repositories for maintainable APIs — with Entity Framework patterns that scale from MVP to production.",
      tags: [".NET Core", "REST API", "Entity Framework", "C#"],
      sidebarCta: {
        title: "Need a Scalable .NET API?",
        text: "Let's architect REST APIs that grow with your product — clean layers, solid patterns, and production-ready performance.",
        linkText: "Book a Consultation →",
        href: "/contact",
      },
      preFooter: {
        title: "Ready to Build a Production API?",
        text: "Let's design a .NET Core backend that scales with your users and stays maintainable for your team.",
        features: [
          {
            icon: "siSpark",
            title: "API Architecture",
            text: "RESTful design & versioning",
          },
          {
            icon: "siSpark",
            title: "Performance",
            text: "Optimized queries & caching",
          },
          {
            icon: "siLock",
            title: "Security",
            text: "Auth, validation & hardening",
          },
          {
            icon: "siApps",
            title: "Full Stack",
            text: "Angular + .NET integration",
          },
        ],
        ctaText: "Get a Free Consultation →",
        ctaHref: "/contact",
      },
      content: [
        {
          type: "section",
          id: "intro",
          title: "Introduction",
          figureFirst: true,
          blocks: [
            {
              type: "p",
              text: "Building a REST API that survives real traffic starts with structure. Over the years working on enterprise .NET projects, I've found that the difference between a prototype and a production API often comes down to how cleanly you separate concerns from day one.",
            },
            {
              type: "p",
              text: "Whether you're shipping an MVP or refactoring a monolith, the patterns in this guide will help you build APIs that stay fast, testable, and easy to extend as requirements grow.",
            },
          ],
        },
        {
          type: "stat-box",
          icon: "siTrending",
          value: "3×",
          text: "faster feature delivery on teams that adopt layered architecture early — compared to tightly coupled controller-heavy codebases.",
        },
        {
          type: "section",
          id: "layering",
          title: "Layer Your Application Correctly",
          blocks: [
            {
              type: "p",
              text: "Keep controllers thin — they should only handle HTTP concerns like routing, status codes, and model binding. Push business logic into service classes and data access into repositories.",
            },
            {
              type: "compare-grid",
              columns: [
                {
                  title: "Controller Responsibilities",
                  items: [
                    "Route mapping & HTTP verbs",
                    "Model validation & binding",
                    "Status codes & response shaping",
                    "Authentication checks",
                  ],
                },
                {
                  title: "Service Layer Responsibilities",
                  items: [
                    "Business rules & workflows",
                    "Transaction orchestration",
                    "Cross-cutting validation",
                    "Domain event handling",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "ef-patterns",
          title: "Entity Framework Patterns That Scale",
          blocks: [
            {
              type: "p",
              text: "Use DbContext pooling in production, apply AsNoTracking() for read-heavy endpoints, and always paginate list results. For complex queries, consider raw SQL or Dapper alongside EF for performance-critical paths.",
            },
            {
              type: "feature-grid",
              items: [
                {
                  icon: "siSpark",
                  title: "DbContext Pooling",
                  text: "Reuse contexts efficiently under load without connection exhaustion.",
                },
                {
                  icon: "siGrid",
                  title: "Pagination",
                  text: "Never return unbounded lists — cursor or offset pagination from day one.",
                },
                {
                  icon: "siLock",
                  title: "AsNoTracking()",
                  text: "Skip change tracking on read-only queries for measurable gains.",
                },
                {
                  icon: "siEdit",
                  title: "Hybrid Data Access",
                  text: "Use Dapper or raw SQL where EF overhead isn't worth it.",
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "versioning",
          title: "Versioning and Documentation",
          blocks: [
            {
              type: "p",
              text: "Adopt API versioning early — URL-based or header-based, but be consistent. Pair Swagger/OpenAPI with meaningful response models so frontend teams and third-party integrators can work independently.",
            },
            {
              type: "bullet-list",
              items: [
                "Version endpoints before your first external consumer depends on them",
                "Document error responses with consistent problem-details format",
                "Use DTOs — never expose EF entities directly",
                "Generate client SDKs from OpenAPI specs for partner integrations",
              ],
            },
          ],
        },
        {
          type: "section",
          id: "conclusion",
          title: "Conclusion",
          blocks: [
            {
              type: "p",
              text: "Scalable APIs aren't built in a single sprint — they're the result of consistent layering, thoughtful data access, and documentation that keeps teams aligned. Start with these foundations and your codebase will thank you at scale.",
            },
            {
              type: "quote-box",
              icon: "siLock",
              text: "The best API architecture is the one your team can understand six months from now. Favor clarity over cleverness, and let structure do the heavy lifting.",
            },
          ],
        },
      ],
    },
    "custom-wordpress-beyond-page-builders": {
      id: "custom-wordpress-beyond-page-builders",
      title: "Custom WordPress: When to Go Beyond Page Builders",
      category: "WordPress",
      date: "2025-11-22",
      dateLabel: "Nov 22, 2025",
      readTime: "8 min read",
      author: "M Sohaib Ishaque",
      image:
        "https://res.cloudinary.com/w3xvfqgt/image/upload/v1787743477/custom-wordpress-beyond-page-builders.png",
      imageAlt:
        "Balance scale comparing Page Builders versus Custom Development",
      excerpt:
        "Page builders like Elementor make it easy to launch quickly — but they aren't always the best long-term choice. This guide helps you decide when custom WordPress development delivers better performance, flexibility, and ROI.",
      tags: ["WordPress", "Development", "Performance"],
      sidebarCta: {
        title: "Need a Custom WordPress Solution?",
        text: "Let's build something great together — tailored themes, custom plugins, and performance-first architecture.",
        linkText: "Book a Consultation →",
        href: "/contact",
      },
      preFooter: {
        title: "Ready to Build Something Amazing?",
        text: "Let's discuss your project and create a custom WordPress solution that performs, scales, and delights your users.",
        features: [
          {
            icon: "siEdit",
            title: "Custom WordPress Development",
            text: "Bespoke themes & plugins",
          },
          {
            icon: "siSpark",
            title: "Performance Optimization",
            text: "Speed & Core Web Vitals",
          },
          {
            icon: "siMessage",
            title: "Ongoing Support",
            text: "Maintenance & updates",
          },
          {
            icon: "siUsers",
            title: "Expert Team",
            text: "Senior WordPress developers",
          },
        ],
        ctaText: "Get a Free Consultation →",
        ctaHref: "/contact",
      },
      content: [
        {
          type: "section",
          id: "intro",
          title: "Introduction",
          figureFirst: true,
          blocks: [
            {
              type: "p",
              text: "WordPress powers over 40% of the web — and page builders like Elementor, Divi, and WPBakery have made it easier than ever to create beautiful sites without writing code. For many projects, that's exactly the right approach.",
            },
            {
              type: "p",
              text: "But as your business grows, your requirements evolve. What started as a simple marketing site may need custom workflows, integrations, or performance that page builders simply can't deliver. Knowing when to make the switch is one of the most important decisions you'll make for your digital presence.",
            },
          ],
        },
        {
          type: "stat-box",
          icon: "siSmartphone",
          value: "53%",
          text: "of mobile users abandon sites that take longer than three seconds to load — page builder bloat is often the culprit.",
        },
        {
          type: "section",
          id: "tension",
          title: "The Tension: Speed vs. Control",
          blocks: [
            {
              type: "p",
              text: "Every WordPress project sits on a spectrum between rapid deployment and deep customization. Page builders excel at the former; custom development wins on the latter. Understanding this trade-off is the foundation of making the right choice.",
            },
            {
              type: "compare-grid",
              columns: [
                {
                  title: "The Speed Advantage",
                  items: [
                    "Launch in days, not weeks",
                    "Visual drag-and-drop editing",
                    "No developer required for content updates",
                    "Lower upfront cost",
                  ],
                },
                {
                  title: "The Control Advantage",
                  items: [
                    "Clean, optimized code output",
                    "Unlimited design flexibility",
                    "Custom post types & workflows",
                    "Scalable architecture for growth",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "limits",
          title: "When Page Builders Show Their Limits",
          blocks: [
            {
              type: "p",
              text: "Page builders are powerful tools — but they have clear boundaries. Here are the most common scenarios where they start holding you back.",
            },
            {
              type: "feature-grid",
              items: [
                {
                  icon: "siSun",
                  title: "Complex Functionality",
                  text: "Membership portals, booking systems, and multi-step forms often exceed what page builders can handle natively.",
                },
                {
                  icon: "siSpark",
                  title: "Performance Concerns",
                  text: "Excessive DOM nodes, render-blocking scripts, and unoptimized assets slow down page builder sites significantly.",
                },
                {
                  icon: "siEdit",
                  title: "Unique Design Requirements",
                  text: "When your brand needs pixel-perfect layouts that break free from template constraints, custom themes win.",
                },
                {
                  icon: "siGrid",
                  title: "Long-Term Scalability",
                  text: "As traffic and content grow, page builder overhead compounds — custom code scales more predictably.",
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "benefits",
          title: "The Benefits of Custom WordPress Development",
          blocks: [
            {
              type: "p",
              text: "Investing in a bespoke WordPress solution pays dividends across performance, security, and maintainability. Here's what you gain.",
            },
            {
              type: "benefits-row",
              items: [
                {
                  icon: "siSpark",
                  title: "Better Performance",
                  text: "Lean code, optimized assets, and no builder overhead",
                },
                {
                  icon: "siApps",
                  title: "Full Flexibility",
                  text: "Any layout, any workflow, any integration",
                },
                {
                  icon: "siLock",
                  title: "Stronger Security",
                  text: "Fewer plugins, fewer attack surfaces",
                },
                {
                  icon: "siTrending",
                  title: "Long-Term Growth",
                  text: "Architecture that evolves with your business",
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "signs",
          title: "Key Signs It's Time To Go Custom",
          blocks: [
            {
              type: "p",
              text: "Not sure if you've outgrown your page builder? Watch for these red flags in your current setup.",
            },
            {
              type: "bullet-list",
              items: [
                "Page load times exceed 3 seconds despite optimization efforts",
                "You need custom post types, fields, or admin workflows",
                "Third-party integrations require workarounds or multiple plugins",
                "Your design team is fighting template limitations weekly",
                "You're paying for premium builder licenses across multiple sites",
                "SEO scores are suffering due to bloated HTML output",
                "You need role-based dashboards or member-only content areas",
              ],
            },
          ],
        },
        {
          type: "section",
          id: "examples",
          title: "Real-World Examples",
          blocks: [
            {
              type: "p",
              text: "These common project types almost always benefit from custom WordPress development over page builder approaches.",
            },
            {
              type: "examples-row",
              items: [
                {
                  icon: "siCart",
                  title: "WooCommerce Store",
                  text: "Custom checkout flows, product configurators, and inventory sync",
                },
                {
                  icon: "siUsers",
                  title: "Membership Platform",
                  text: "Gated content, subscription billing, and user dashboards",
                },
                {
                  icon: "siHome",
                  title: "Business Website",
                  text: "Multi-location sites, CRM integrations, and lead routing",
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "conclusion",
          title: "Conclusion",
          blocks: [
            {
              type: "p",
              text: "Page builders aren't going away — and they shouldn't. They're the right tool for many projects. But knowing when to graduate to custom WordPress development can save you months of frustration and thousands in lost revenue from slow, inflexible sites.",
            },
            {
              type: "quote-box",
              icon: "siLock",
              text: "The right solution depends on your goals, not just the tools available. Start with page builders when speed matters most — switch to custom development when control, performance, and scalability become your priorities.",
            },
          ],
        },
      ],
    },
    "angular-performance-tips-production": {
      id: "angular-performance-tips-production",
      title: "Angular Performance Tips for Production Apps",
      category: "Frontend",
      date: "2025-12-08",
      dateLabel: "Dec 8, 2025",
      readTime: "7 min read",
      author: "M Sohaib Ishaque",
      image:
        "https://res.cloudinary.com/w3xvfqgt/image/upload/v1787743478/angular-performance-tips-production.png",
      imageAlt: "Angular framework logo on screen",
      excerpt:
        "Lazy loading, OnPush change detection, and bundle optimization strategies that cut load times and keep your Angular apps snappy under real traffic.",
      tags: ["Angular", "Performance", "TypeScript", "RxJS"],
      sidebarCta: {
        title: "Need an Angular Performance Audit?",
        text: "I'll profile your app, identify bottlenecks, and implement fixes that measurably improve load times and runtime responsiveness.",
        linkText: "Book a Consultation →",
        href: "/contact",
      },
      preFooter: {
        title: "Ready to Speed Up Your Angular App?",
        text: "Let's optimize your frontend for real users — faster loads, smoother interactions, and better Core Web Vitals.",
        features: [
          {
            icon: "siSpark",
            title: "Bundle Analysis",
            text: "Tree-shaking & code splitting",
          },
          {
            icon: "siSpark",
            title: "Change Detection",
            text: "OnPush & signal-based patterns",
          },
          {
            icon: "siGrid",
            title: "Lazy Loading",
            text: "Route & component-level splits",
          },
          {
            icon: "siTrending",
            title: "Monitoring",
            text: "Real-user performance metrics",
          },
        ],
        ctaText: "Get a Free Consultation →",
        ctaHref: "/contact",
      },
      content: [
        {
          type: "section",
          id: "intro",
          title: "Introduction",
          figureFirst: true,
          blocks: [
            {
              type: "p",
              text: "Angular gives you powerful tools out of the box, but production performance requires deliberate choices. These are the techniques I apply on every client project before go-live.",
            },
            {
              type: "p",
              text: "From initial bundle size to runtime change detection, small architectural decisions compound into noticeably faster apps — especially on mid-range mobile devices.",
            },
          ],
        },
        {
          type: "stat-box",
          icon: "siSpark",
          value: "60%",
          text: "reduction in initial bundle size achievable through lazy-loaded feature modules on medium-sized Angular applications.",
        },
        {
          type: "section",
          id: "lazy-loading",
          title: "Lazy Load Feature Modules",
          blocks: [
            {
              type: "p",
              text: "Split your app into feature modules loaded on demand. Users should only download the code they need for the route they're visiting.",
            },
            {
              type: "benefits-row",
              items: [
                {
                  icon: "siGrid",
                  title: "Route Splitting",
                  text: "Load admin, dashboard, and public areas separately",
                },
                {
                  icon: "siSpark",
                  title: "Preloading",
                  text: "Use custom preloading strategies for likely next routes",
                },
                {
                  icon: "siApps",
                  title: "Standalone APIs",
                  text: "Lazy-load standalone components in Angular 17+",
                },
                {
                  icon: "siTrending",
                  title: "Measurable Impact",
                  text: "40–60% smaller initial bundles",
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "onpush",
          title: "OnPush Change Detection",
          blocks: [
            {
              type: "p",
              text: "Default change detection checks every component on every event. Switching presentational components to OnPush reduces unnecessary re-renders dramatically — especially in data-heavy dashboards and admin panels.",
            },
            {
              type: "compare-grid",
              columns: [
                {
                  title: "Default Strategy",
                  items: [
                    "Checks all components on every event",
                    "Simple to reason about initially",
                    "Performance degrades with component count",
                    "Harder to optimize later",
                  ],
                },
                {
                  title: "OnPush Strategy",
                  items: [
                    "Checks only on input/reference changes",
                    "Requires immutable data patterns",
                    "Dramatically fewer DOM updates",
                    "Pairs well with signals & async pipe",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "bundle",
          title: "Optimize Your Bundle",
          blocks: [
            {
              type: "p",
              text: "Analyze with webpack-bundle-analyzer, tree-shake unused lodash imports, defer non-critical third-party scripts, and use trackBy in ngFor loops. Small wins compound into noticeably faster apps.",
            },
            {
              type: "bullet-list",
              items: [
                "Replace barrel imports with direct module imports",
                "Defer analytics and chat widgets until after first paint",
                "Use trackBy functions in every ngFor over dynamic lists",
                "Audit third-party dependencies quarterly",
              ],
            },
          ],
        },
        {
          type: "section",
          id: "conclusion",
          title: "Conclusion",
          blocks: [
            {
              type: "p",
              text: "Angular performance isn't about one magic fix — it's a stack of deliberate choices applied consistently. Lazy loading, OnPush, and bundle discipline will keep your app fast as it grows.",
            },
            {
              type: "quote-box",
              icon: "siLock",
              text: "Users don't care about your framework — they care about how fast your app feels. Invest in performance before launch, not after complaints roll in.",
            },
          ],
        },
      ],
    },
    "responsive-design-modern-css": {
      id: "responsive-design-modern-css",
      title: "Responsive Design with Modern CSS in 2025",
      category: "Frontend",
      date: "2025-08-05",
      dateLabel: "Aug 5, 2025",
      readTime: "6 min read",
      author: "M Sohaib Ishaque",
      image:
        "https://res.cloudinary.com/w3xvfqgt/image/upload/v1787743477/responsive-design-modern-css.png",
      imageAlt: "Responsive web design on multiple devices",
      excerpt:
        "Container queries, clamp(), and CSS Grid patterns that make truly responsive layouts without fighting Bootstrap breakpoints.",
      tags: ["CSS", "Responsive Design", "Grid", "UI/UX"],
      sidebarCta: {
        title: "Need a Responsive UI Overhaul?",
        text: "I'll rebuild your layouts with modern CSS — fluid typography, container queries, and grid systems that adapt naturally.",
        linkText: "Book a Consultation →",
        href: "/contact",
      },
      preFooter: {
        title: "Ready for Modern, Responsive UI?",
        text: "Let's build interfaces that look great on every screen without breakpoint spaghetti.",
        features: [
          {
            icon: "siGrid",
            title: "CSS Grid Layouts",
            text: "Flexible, component-aware grids",
          },
          {
            icon: "siEdit",
            title: "Fluid Typography",
            text: "clamp() & responsive type scales",
          },
          {
            icon: "siSpark",
            title: "Container Queries",
            text: "Component-level responsiveness",
          },
          {
            icon: "siSun",
            title: "Design Systems",
            text: "Consistent tokens & patterns",
          },
        ],
        ctaText: "Get a Free Consultation →",
        ctaHref: "/contact",
      },
      content: [
        {
          type: "section",
          id: "intro",
          title: "Introduction",
          figureFirst: true,
          blocks: [
            {
              type: "p",
              text: "Modern CSS has evolved far beyond media-query-only responsive design. Here's how I build layouts that adapt fluidly across devices without excessive breakpoint management.",
            },
            {
              type: "p",
              text: "The goal isn't fewer media queries for their own sake — it's layouts that respond to their actual context, whether that's viewport width or parent container size.",
            },
          ],
        },
        {
          type: "stat-box",
          icon: "siSmartphone",
          value: "58%",
          text: "of global web traffic comes from mobile devices — layouts that only adapt at viewport breakpoints miss component-level context.",
        },
        {
          type: "section",
          id: "container-queries",
          title: "Container Queries",
          blocks: [
            {
              type: "p",
              text: "Container queries let components respond to their parent size, not just the viewport. This is a game-changer for reusable card grids, sidebars, and dashboard widgets.",
            },
            {
              type: "feature-grid",
              items: [
                {
                  icon: "siGrid",
                  title: "Card Grids",
                  text: "Cards reflow based on grid column width, not screen size.",
                },
                {
                  icon: "siEdit",
                  title: "Sidebars",
                  text: "Collapse navigation when the sidebar container narrows.",
                },
                {
                  icon: "siSpark",
                  title: "Dashboard Widgets",
                  text: "Widgets adapt density inside flexible grid areas.",
                },
                {
                  icon: "siSun",
                  title: "Reusable Components",
                  text: "Same component works in main content and narrow aside.",
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "fluid-type",
          title: "Fluid Typography with clamp()",
          blocks: [
            {
              type: "p",
              text: "Replace fixed font-size breakpoints with clamp(min, preferred, max). Headings scale smoothly from mobile to desktop without dozens of media query overrides.",
            },
            {
              type: "bullet-list",
              items: [
                "Define a type scale with clamp() for h1–h6 and body text",
                "Use rem-based spacing that scales with root font size",
                "Pair fluid type with max-width on prose containers",
                "Test at 320px, 768px, and 1440px — not just standard breakpoints",
              ],
            },
          ],
        },
        {
          type: "section",
          id: "conclusion",
          title: "Conclusion",
          blocks: [
            {
              type: "p",
              text: "Modern CSS gives you the tools to build truly responsive interfaces. Container queries and fluid typography reduce breakpoint fatigue and produce layouts that feel natural at every size.",
            },
            {
              type: "quote-box",
              icon: "siLock",
              text: "Responsive design in 2025 means designing for context — not just screen width. Let your components respond to where they live, not just where they're viewed.",
            },
          ],
        },
      ],
    },
    "entity-framework-core-tips": {
      id: "entity-framework-core-tips",
      title: "Entity Framework Core Tips Every Developer Should Know",
      category: "Backend",
      date: "2025-09-18",
      dateLabel: "Sep 18, 2025",
      readTime: "5 min read",
      author: "M Sohaib Ishaque",
      image:
        "https://res.cloudinary.com/w3xvfqgt/image/upload/v1787750772/entity-framework-core-tips.png",
      imageAlt: "Database server room",
      excerpt:
        "Practical EF Core techniques for migrations, query optimization, and avoiding common pitfalls that slow down .NET applications in production.",
      tags: ["Entity Framework", ".NET Core", "SQL Server", "Database"],
      sidebarCta: {
        title: "Struggling with Slow EF Queries?",
        text: "I'll profile your data layer, fix N+1 issues, and set up migration workflows that work in CI/CD.",
        linkText: "Book a Consultation →",
        href: "/contact",
      },
      preFooter: {
        title: "Ready to Optimize Your Data Layer?",
        text: "Let's make Entity Framework Core work for you — fast queries, safe migrations, and maintainable patterns.",
        features: [
          {
            icon: "siSpark",
            title: "Query Optimization",
            text: "N+1 fixes & projection patterns",
          },
          {
            icon: "siGrid",
            title: "Migration Strategy",
            text: "CI/CD-safe schema changes",
          },
          {
            icon: "siLock",
            title: "Production Safety",
            text: "Backups & idempotent scripts",
          },
          {
            icon: "siApps",
            title: "Hybrid Access",
            text: "EF + Dapper where it counts",
          },
        ],
        ctaText: "Get a Free Consultation →",
        ctaHref: "/contact",
      },
      content: [
        {
          type: "section",
          id: "intro",
          title: "Introduction",
          figureFirst: true,
          blocks: [
            {
              type: "p",
              text: "Entity Framework Core is powerful but easy to misuse. These tips come from debugging slow queries and migration headaches on real production databases.",
            },
            {
              type: "p",
              text: "Whether you're new to EF Core or maintaining a mature codebase, these patterns will save you hours of profiling and prevent costly production incidents.",
            },
          ],
        },
        {
          type: "stat-box",
          icon: "siTrending",
          value: "10×",
          text: "query slowdown is common when N+1 problems go undetected until production traffic hits — enable query logging in development.",
        },
        {
          type: "section",
          id: "migrations",
          title: "Migrations Done Right",
          blocks: [
            {
              type: "p",
              text: "Keep migrations small and review generated SQL before applying to production. Use idempotent scripts for CI/CD pipelines and always backup before schema changes on live data.",
            },
            {
              type: "bullet-list",
              items: [
                "One logical change per migration — easier to review and rollback",
                "Generate idempotent SQL scripts for automated deployments",
                "Never edit applied migrations — create a new one instead",
                "Test migrations against a copy of production data",
              ],
            },
          ],
        },
        {
          type: "section",
          id: "n-plus-one",
          title: "Avoid N+1 Queries",
          blocks: [
            {
              type: "p",
              text: "Use Include() and ThenInclude() judiciously, or project directly to DTOs with Select(). Enable query logging in development to catch N+1 problems before they reach users.",
            },
            {
              type: "compare-grid",
              columns: [
                {
                  title: "Eager Loading",
                  items: [
                    "Include() for known relationships",
                    "Good for detail pages with fixed graphs",
                    "Watch for cartesian explosion on multiple includes",
                    "Use split queries when needed",
                  ],
                },
                {
                  title: "Projection",
                  items: [
                    "Select() directly to DTOs",
                    "Only fetches columns you need",
                    "Eliminates over-fetching",
                    "Best for list and search endpoints",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "conclusion",
          title: "Conclusion",
          blocks: [
            {
              type: "p",
              text: "EF Core rewards developers who understand what happens under the hood. Small habits — logging queries, projecting to DTOs, and careful migrations — prevent the performance and deployment issues that plague larger teams.",
            },
            {
              type: "quote-box",
              icon: "siLock",
              text: "ORMs trade convenience for visibility. The developers who succeed with EF Core are the ones who peek behind the abstraction when performance matters.",
            },
          ],
        },
      ],
    },
    "from-monolith-to-modular": {
      id: "from-monolith-to-modular",
      title: "From Monolith to Modular: Real Client Lessons",
      category: "Architecture",
      date: "2025-10-10",
      dateLabel: "Oct 10, 2025",
      readTime: "7 min read",
      author: "M Sohaib Ishaque",
      image:
        "https://res.cloudinary.com/w3xvfqgt/image/upload/v1787772153/from-monolith-to-modular.png",
      imageAlt: "Digital network visualization",
      excerpt:
        "How breaking a tightly coupled codebase into focused modules improved deployment speed, testability, and team collaboration on a live enterprise project.",
      tags: ["Architecture", "Modular Design", ".NET Core", "Clean Code"],
      sidebarCta: {
        title: "Stuck with a Legacy Monolith?",
        text: "I'll help you identify module boundaries and extract them incrementally — no risky big-bang rewrite required.",
        linkText: "Book a Consultation →",
        href: "/contact",
      },
      preFooter: {
        title: "Ready to Modularize Your Codebase?",
        text: "Let's break the monolith into focused modules your team can own, test, and deploy independently.",
        features: [
          {
            icon: "siGrid",
            title: "Boundary Analysis",
            text: "Find natural domain seams",
          },
          {
            icon: "siSpark",
            title: "Incremental Extraction",
            text: "One module at a time",
          },
          {
            icon: "siApps",
            title: "Team Ownership",
            text: "Clear module boundaries",
          },
          {
            icon: "siTrending",
            title: "Faster Deploys",
            text: "Smaller, safer releases",
          },
        ],
        ctaText: "Get a Free Consultation →",
        ctaHref: "/contact",
      },
      content: [
        {
          type: "section",
          id: "intro",
          title: "Introduction",
          figureFirst: true,
          blocks: [
            {
              type: "p",
              text: "Monoliths aren't always wrong — but unmaintainable monoliths are. Here's what changed when we modularized a legacy enterprise app without a risky big-bang rewrite.",
            },
            {
              type: "p",
              text: "The project had grown over five years into a single deployable with shared state everywhere. Deployments were weekly affairs that everyone dreaded.",
            },
          ],
        },
        {
          type: "stat-box",
          icon: "siTrending",
          value: "2×",
          text: "faster deployment cycles achieved within two sprints of extracting the first independent module with clear interfaces.",
        },
        {
          type: "section",
          id: "boundaries",
          title: "Identify Natural Boundaries",
          blocks: [
            {
              type: "p",
              text: "Start with domains that change independently: billing, reporting, user management. Extract one module at a time behind clear interfaces before touching shared infrastructure.",
            },
            {
              type: "feature-grid",
              items: [
                {
                  icon: "siGrid",
                  title: "Domain Analysis",
                  text: "Map business capabilities and their change frequency.",
                },
                {
                  icon: "siUsers",
                  title: "Team Alignment",
                  text: "Modules should match how teams actually work.",
                },
                {
                  icon: "siEdit",
                  title: "Interface First",
                  text: "Define public APIs before moving implementation.",
                },
                {
                  icon: "siLock",
                  title: "Shared Kernel",
                  text: "Keep truly shared code minimal and explicit.",
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "deploy",
          title: "Deploy Smaller, Ship Faster",
          blocks: [
            {
              type: "p",
              text: "Smaller modules mean smaller releases, faster rollbacks, and clearer ownership. Teams stopped stepping on each other during deployments within two sprints.",
            },
            {
              type: "benefits-row",
              items: [
                {
                  icon: "siSpark",
                  title: "Isolated Testing",
                  text: "Test modules without spinning up the entire app",
                },
                {
                  icon: "siTrending",
                  title: "Parallel Work",
                  text: "Teams ship without merge conflicts",
                },
                {
                  icon: "siLock",
                  title: "Safer Rollbacks",
                  text: "Revert one module, not everything",
                },
                {
                  icon: "siApps",
                  title: "Clear Ownership",
                  text: "Every module has a named owner",
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "conclusion",
          title: "Conclusion",
          blocks: [
            {
              type: "p",
              text: "Modularization isn't about microservices or hype — it's about making your codebase match how your business and teams actually operate. Start small, extract one boundary, and build momentum.",
            },
            {
              type: "quote-box",
              icon: "siLock",
              text: "The best modularization strategy is incremental. Extract what hurts most first, prove the pattern works, then expand.",
            },
          ],
        },
      ],
    },
    "jwt-authentication-net-core": {
      id: "jwt-authentication-net-core",
      title: "JWT Authentication in .NET Core APIs",
      category: "Backend",
      date: "2025-07-14",
      dateLabel: "Jul 14, 2025",
      readTime: "6 min read",
      author: "M Sohaib Ishaque",
      image:
        "https://res.cloudinary.com/w3xvfqgt/image/upload/v1787771827/jwt-authentication-net-core.png",
      imageAlt: "Security lock on digital interface",
      excerpt:
        "A practical walkthrough of securing ASP.NET Core APIs with JWT — token issuance, refresh flows, and middleware configuration that works in production.",
      tags: ["JWT", ".NET Core", "Security", "REST API"],
      sidebarCta: {
        title: "Need Secure API Authentication?",
        text: "I'll implement JWT auth with proper refresh flows, token rotation, and middleware hardening for your .NET Core API.",
        linkText: "Book a Consultation →",
        href: "/contact",
      },
      preFooter: {
        title: "Ready to Secure Your API?",
        text: "Let's implement authentication that protects your users without slowing down your development workflow.",
        features: [
          {
            icon: "siLock",
            title: "JWT Implementation",
            text: "Token issuance & validation",
          },
          {
            icon: "siSpark",
            title: "Refresh Flows",
            text: "Rotating tokens & secure storage",
          },
          {
            icon: "siGrid",
            title: "Middleware Setup",
            text: "ASP.NET Core auth pipeline",
          },
          {
            icon: "siApps",
            title: "Frontend Integration",
            text: "Angular/React token handling",
          },
        ],
        ctaText: "Get a Free Consultation →",
        ctaHref: "/contact",
      },
      content: [
        {
          type: "section",
          id: "intro",
          title: "Introduction",
          figureFirst: true,
          blocks: [
            {
              type: "p",
              text: "JWT is the default auth story for modern .NET APIs. Done right, it's simple and scalable. Done wrong, you leak tokens or ship brittle refresh logic.",
            },
            {
              type: "p",
              text: "This guide covers the production patterns I use — short-lived access tokens, secure refresh flows, and middleware configuration that actually holds up under audit.",
            },
          ],
        },
        {
          type: "stat-box",
          icon: "siLock",
          value: "15min",
          text: "is the recommended maximum access token lifetime for most web APIs — shorter windows limit damage from token theft.",
        },
        {
          type: "section",
          id: "token-structure",
          title: "Token Structure and Signing",
          blocks: [
            {
              type: "p",
              text: "Use short-lived access tokens with strong signing keys stored outside source control. Never put sensitive claims in the payload — assume clients can read them.",
            },
            {
              type: "bullet-list",
              items: [
                "Store signing keys in environment variables or a secrets manager",
                "Include only user ID, roles, and permissions in claims — not PII",
                "Use RS256 for multi-service architectures where other services verify tokens",
                "Set explicit expiration and validate issuer/audience on every request",
              ],
            },
          ],
        },
        {
          type: "section",
          id: "refresh",
          title: "Refresh Tokens Safely",
          blocks: [
            {
              type: "p",
              text: "Store refresh tokens server-side or use rotating refresh tokens with device binding. Pair with HTTPS everywhere and explicit logout endpoints that revoke sessions.",
            },
            {
              type: "compare-grid",
              columns: [
                {
                  title: "Server-Side Storage",
                  items: [
                    "Refresh tokens stored in database",
                    "Easy revocation on logout",
                    "Requires DB lookup per refresh",
                    "Best for high-security applications",
                  ],
                },
                {
                  title: "Rotating Refresh Tokens",
                  items: [
                    "New refresh token issued each use",
                    "Detects token reuse attacks",
                    "Stateless-friendly with encrypted cookies",
                    "Requires careful client-side handling",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "conclusion",
          title: "Conclusion",
          blocks: [
            {
              type: "p",
              text: "JWT authentication is straightforward when you respect the security model — short-lived tokens, secure refresh, and explicit revocation. Skip any of these and you'll pay for it later.",
            },
            {
              type: "quote-box",
              icon: "siLock",
              text: "Security isn't a feature you bolt on at the end. Design your auth flow before your first endpoint ships, and treat token management as first-class infrastructure.",
            },
          ],
        },
      ],
    },
    "typescript-patterns-large-apps": {
      id: "typescript-patterns-large-apps",
      title: "TypeScript Patterns for Large Frontend Apps",
      category: "Frontend",
      date: "2025-06-02",
      dateLabel: "Jun 2, 2025",
      readTime: "6 min read",
      author: "M Sohaib Ishaque",
      image:
        "https://res.cloudinary.com/w3xvfqgt/image/upload/v1787771481/typescript-patterns-large-apps.png",
      imageAlt: "TypeScript code on a monitor",
      excerpt:
        "Discriminated unions, strict null checks, and module boundaries that keep Angular and React projects maintainable as they grow past 50 components.",
      tags: ["TypeScript", "Angular", "Frontend", "Architecture"],
      sidebarCta: {
        title: "TypeScript Codebase Getting Unwieldy?",
        text: "I'll establish patterns, module boundaries, and type conventions that keep large frontend apps maintainable.",
        linkText: "Book a Consultation →",
        href: "/contact",
      },
      preFooter: {
        title: "Ready to Scale Your Frontend?",
        text: "Let's put TypeScript patterns in place that prevent regressions and speed up onboarding as your app grows.",
        features: [
          {
            icon: "siEdit",
            title: "Type Patterns",
            text: "Discriminated unions & strict nulls",
          },
          {
            icon: "siGrid",
            title: "Module Boundaries",
            text: "Feature folders & public APIs",
          },
          {
            icon: "siSpark",
            title: "Linting Rules",
            text: "Enforced conventions via ESLint",
          },
          {
            icon: "siApps",
            title: "Team Onboarding",
            text: "Clear patterns new devs can follow",
          },
        ],
        ctaText: "Get a Free Consultation →",
        ctaHref: "/contact",
      },
      content: [
        {
          type: "section",
          id: "intro",
          title: "Introduction",
          figureFirst: true,
          blocks: [
            {
              type: "p",
              text: "TypeScript pays off when your app outgrows a single team. These patterns reduce regressions and make onboarding new developers faster.",
            },
            {
              type: "p",
              text: "Past 50 components, implicit conventions break down. You need explicit patterns that the compiler and linter can enforce.",
            },
          ],
        },
        {
          type: "stat-box",
          icon: "siTrending",
          value: "40%",
          text: "fewer runtime bugs reported by teams that adopt discriminated unions for API response modeling versus optional-field interfaces.",
        },
        {
          type: "section",
          id: "unions",
          title: "Model Domains with Unions",
          blocks: [
            {
              type: "p",
              text: "Use discriminated unions for API responses and UI states instead of optional fields everywhere. The compiler catches invalid combinations before runtime.",
            },
            {
              type: "feature-grid",
              items: [
                {
                  icon: "siEdit",
                  title: "API Responses",
                  text: "Success | Error | Loading as explicit union members.",
                },
                {
                  icon: "siGrid",
                  title: "UI States",
                  text: "Modal open/closed with typed payload per state.",
                },
                {
                  icon: "siSpark",
                  title: "Exhaustive Checks",
                  text: "Switch statements that fail compile if a case is missing.",
                },
                {
                  icon: "siLock",
                  title: "Narrowing",
                  text: "Type guards that eliminate impossible states.",
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "boundaries",
          title: "Enforce Module Boundaries",
          blocks: [
            {
              type: "p",
              text: "Barrel files and path aliases help, but explicit feature folders with public entry points prevent circular imports and hidden coupling.",
            },
            {
              type: "bullet-list",
              items: [
                "Each feature folder exports only through an index.ts public API",
                "Ban deep imports into other features' internals via ESLint rules",
                "Shared utilities live in a dedicated lib folder, not scattered helpers",
                "Document module dependency direction — features never import from pages",
              ],
            },
          ],
        },
        {
          type: "section",
          id: "conclusion",
          title: "Conclusion",
          blocks: [
            {
              type: "p",
              text: "TypeScript's value compounds with team size. Invest in patterns early — discriminated unions, strict null checks, and module boundaries — and your codebase stays navigable at scale.",
            },
            {
              type: "quote-box",
              icon: "siLock",
              text: "Types are documentation that never goes stale. The patterns you establish today are the guardrails your future team will thank you for.",
            },
          ],
        },
      ],
    },
  }),
  (window.Portfolio.BLOG_ORDER = [
    "building-scalable-rest-apis-with-net-core",
    "angular-performance-tips-production",
    "custom-wordpress-beyond-page-builders",
    "entity-framework-core-tips",
    "responsive-design-modern-css",
    "from-monolith-to-modular",
    "jwt-authentication-net-core",
    "typescript-patterns-large-apps",
  ]),
  (window.Portfolio.BLOG_GALLERY_ORDER = [
    "building-scalable-rest-apis-with-net-core",
    "custom-wordpress-beyond-page-builders",
    "angular-performance-tips-production",
    "responsive-design-modern-css",
    "entity-framework-core-tips",
    "from-monolith-to-modular",
    "jwt-authentication-net-core",
    "typescript-patterns-large-apps",
  ]),
  (function () {
    const order = window.Portfolio.BLOG_ORDER;
    const blogs = window.Portfolio.BLOGS;
    order.forEach((id, index) => {
      const post = blogs[id];
      if (!post) return;
      post.prevBlog =
        index > 0
          ? { id: order[index - 1], title: blogs[order[index - 1]].title }
          : null;
      post.nextBlog =
        index < order.length - 1
          ? { id: order[index + 1], title: blogs[order[index + 1]].title }
          : null;
    });
  })());

function _resolveBlogIcon(key) {
  if (!key) return "siGrid";
  if (key.startsWith("si")) return key;
  return "siGrid";
}

function _iconHtml(registryName, extraClass) {
  const cls = extraClass ? `icon ${extraClass}` : "icon";
  return `<span class="${cls}" data-icon="${registryName}" aria-hidden="true"></span>`;
}

function _hydrateBlogIcons(root) {
  window.Portfolio?.ICONS?.hydrateAll?.(root || document);
}

function _categorySlug(category) {
  return (
    window.Portfolio?.UTILS?.blogCategoryToSlug?.(category) ||
    String(category || "")
      .toLowerCase()
      .replace(/\s+/g, "-")
  );
}

function _blogUrl(id) {
  const post = window.Portfolio.BLOGS?.[id];
  if (!post) return "/blogs";
  const category = _categorySlug(post.category);
  return `/blogs/${encodeURIComponent(category)}/${encodeURIComponent(id)}`;
}

function _resolveBlogId() {
  const blogs = window.Portfolio.BLOGS || {};
  const slugFromPath = window.Portfolio.UTILS?.getBlogSlugFromPath?.();
  if (slugFromPath && blogs[slugFromPath]) return slugFromPath;
  const fromQuery = new URLSearchParams(window.location.search).get("id");
  if (fromQuery && blogs[fromQuery]) return fromQuery;
  return null;
}

function _categoryLabel(category) {
  if (category === "Frontend") return "frontend";
  return category;
}

function _thumbUrl(url) {
  return url;
}

function _searchBlob(post) {
  const parts = [post.title, post.excerpt, post.category, ...(post.tags || [])];
  (post.content || []).forEach((block) => {
    if (block.type === "section") {
      parts.push(block.title);
      (block.blocks || []).forEach((b) => {
        if (b.text) parts.push(b.text);
        if (b.items) parts.push(b.items.join(" "));
        if (b.columns)
          b.columns.forEach((c) => parts.push(c.title, ...(c.items || [])));
      });
    } else if (block.text) {
      parts.push(block.text);
    }
  });
  return parts.join(" ").toLowerCase();
}

function _renderCheckList(items) {
  return `<ul class="check-list">${items
    .map(
      (item) =>
        `<li>${_iconHtml("siCheckmark")}${item}</li>`,
    )
    .join("")}</ul>`;
}

function _renderCompareGrid(columns) {
  return `<div class="compare-grid">${columns
    .map(
      (col) => `
    <div class="compare-card">
      <h3>${col.title}</h3>
      ${_renderCheckList(col.items)}
    </div>`,
    )
    .join("")}</div>`;
}

function _renderFeatureGrid(items) {
  return `<div class="feature-grid">${items
    .map(
      (item) => `
    <div class="feature-card">
      <div class="feature-icon">${_iconHtml(_resolveBlogIcon(item.icon))}</div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>`,
    )
    .join("")}</div>`;
}

function _renderBenefitsRow(items) {
  return `<div class="benefits-row">${items
    .map(
      (item) => `
    <div class="benefit-item">
      <div class="benefit-icon">${_iconHtml(_resolveBlogIcon(item.icon))}</div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>`,
    )
    .join("")}</div>`;
}

function _renderBulletList(items) {
  return `<ul class="bullet-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function _renderExamplesRow(items) {
  return `<div class="examples-row">${items
    .map(
      (item) => `
    <div class="example-card">
      <div class="feature-icon">${_iconHtml(_resolveBlogIcon(item.icon))}</div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>`,
    )
    .join("")}</div>`;
}

function _renderBlock(block, post) {
  switch (block.type) {
    case "p":
      return `<p>${block.text}</p>`;
    case "compare-grid":
      return _renderCompareGrid(block.columns);
    case "feature-grid":
      return _renderFeatureGrid(block.items);
    case "benefits-row":
      return _renderBenefitsRow(block.items);
    case "bullet-list":
      return _renderBulletList(block.items);
    case "examples-row":
      return _renderExamplesRow(block.items);
    case "quote-box":
      return `<div class="quote-box">${_iconHtml(_resolveBlogIcon(block.icon))}<p>${block.text}</p></div>`;
    default:
      return "";
  }
}

function _renderStatBox(block) {
  return `
    <div class="stat-box">
      <div class="stat-icon">${_iconHtml(_resolveBlogIcon(block.icon))}</div>
      <div>
        <div class="stat-value">${block.value}</div>
        <p class="stat-text">${block.text}</p>
      </div>
    </div>`;
}

function _renderArticleBody(content, post) {
  let html = "";
  (content || []).forEach((block) => {
    if (block.type === "section") {
      const figure = block.figureFirst
        ? `<figure class="article-figure"><img src="${post.image}" alt="${post.imageAlt}" width="900" height="400" loading="eager" /></figure>`
        : "";
      const inner = (block.blocks || [])
        .map((b) => _renderBlock(b, post))
        .join("");
      html += `
        <section id="${block.id}">
          ${figure}
          <h2>${block.title}</h2>
          ${inner}
        </section>`;
    } else if (block.type === "stat-box") {
      html += _renderStatBox(block);
    }
  });

  html += `
    <div class="author-footer">
      <div class="nav-logo" aria-label="Author">
        <div class="logo-box u-flex-center" aria-hidden="true">SI</div>
        <div class="logo-text">
          <span class="logo-name">${post.author}</span>
          <span class="logo-role">Full Stack Web Developer</span>
        </div>
      </div>
      <div class="share-row">
        <span class="share-label">Share this article</span>
        <a href="#" class="share-btn" aria-label="Share on Twitter" data-share="twitter">
          ${_iconHtml("siXcom")}
        </a>
        <a href="#" class="share-btn" aria-label="Share on LinkedIn" data-share="linkedin">
          ${_iconHtml("siLinkedin")}
        </a>
        <a href="#" class="share-btn" aria-label="Share on Facebook" data-share="facebook">
          ${_iconHtml("siFacebook")}
        </a>
        <a href="#" class="share-btn" aria-label="Copy link" data-share="copy">
          ${_iconHtml("siLink")}
        </a>
      </div>
    </div>
    <nav class="bd-post-nav" id="bdPostNav" aria-label="Previous and next articles"></nav>`;

  return html;
}

function _getTocSections(content) {
  return (content || []).filter((block) => block.type === "section");
}

function _renderToc(content) {
  const sections = _getTocSections(content);
  return sections
    .map(
      (section, index) =>
        `<a href="#${section.id}"><span class="toc-num">${String(index + 1).padStart(2, "0")}</span> ${section.title}</a>`,
    )
    .join("");
}

function _renderPreFooterFeatures(features) {
  return (features || [])
    .map(
      (f) => `
    <div class="pre-footer-feature">
      <div class="benefit-icon">${_iconHtml(_resolveBlogIcon(f.icon))}</div>
      <h4>${f.title}</h4>
      <p>${f.text}</p>
    </div>`,
    )
    .join("");
}

function _renderGalleryCard(post) {
  const slug = _categorySlug(post.category);
  const searchData = _searchBlob(post);
  return `
    <article
      class="pg-card reveal"
      data-category="${slug}"
      data-id="${post.id}"
      data-title="${post.title.toLowerCase()}"
      data-date="${post.date}"
      data-search="${searchData.replace(/"/g, "&quot;")}"
      tabindex="0"
      aria-label="${post.title}"
    >
      <div class="pg-thumb">
        <div class="pg-thumb-grid" aria-hidden="true"></div>
        <img
          src="${post.image}"
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 400px"
          alt="${post.imageAlt}"
          class="pg-thumb-screenshot"
          loading="lazy"
        />
        <div class="pg-overlay" aria-hidden="true">
          <div class="pg-overlay-icon">
            ${_iconHtml("siExternalLink")}
          </div>
        </div>
      </div>
      <div class="pg-body">
        <h3 class="pg-name">${post.title}</h3>
        <p class="pg-category">${_categoryLabel(post.category)}</p>
        <p class="pg-desc">${post.excerpt}</p>
        <a href="${_blogUrl(post.id)}" class="pg-link">
          Read article ${_iconHtml("siArrowRight")}
        </a>
      </div>
    </article>`;
}

function _renderRecentItem(post) {
  return `
    <a
      href="${_blogUrl(post.id)}"
      class="blog-recent-item"
      role="listitem"
      data-category="${_categorySlug(post.category)}"
      data-id="${post.id}"
      data-title="${post.title.toLowerCase()}"
      data-date="${post.date}"
      data-search="${_searchBlob(post).replace(/"/g, "&quot;")}"
    >
      <div class="blog-recent-thumb">
        <img src="${_thumbUrl(post.image)}" alt="${post.imageAlt}" class="blog-recent-img" loading="lazy" />
      </div>
      <div class="bd-related-body">
        <div class="bd-related-header">
          <h3 class="blog-recent-title">${post.title}</h3>
          <span class="blog-post-category">${post.category}</span>
          <p class="blog-recent-excerpt">${post.excerpt}</p>
        </div>
        <div class="bd-related-footer">
          <div class="blog-recent-meta">
            <time datetime="${post.date}">${post.dateLabel}</time>
            <span>${post.readTime}</span>
          </div>
          <span class="blog-feat-read">Read More ${_iconHtml("siArrowRight")}</span>
        </div>
      </div>
    </a>`;
}

function _renderTopicCard(category, count, slugOverride) {
  const slug = slugOverride || _categorySlug(category);
  const abbrMap = {
    backend: "BA",
    frontend: "FR",
    wordpress: "WO",
    "ui-ux": "UX",
    "designs-system": "DS",
    architecture: "AR",
  };
  const abbr = abbrMap[slug] || category.slice(0, 2).toUpperCase();
  return `
    <button type="button" class="blog-topic-card" data-category="${slug}">
      <span class="blog-topic-icon" aria-hidden="true">${abbr}</span>
      <span class="blog-topic-name">${category}</span>
      <span class="blog-topic-count">${count} Article${count === 1 ? "" : "s"}</span>
    </button>`;
}

function _renderTopRead(post) {
  return `
    <li>
      <a href="${_blogUrl(post.id)}">
        <div>
          <p class="blog-top-read-title">${post.title}</p>
          <span class="blog-top-read-meta">${post.readTime}</span>
        </div>
      </a>
    </li>`;
}

function _renderHomeBlogCard(post) {
  return `
    <article
      class="blog-card reveal"
      role="listitem"
      tabindex="0"
      aria-label="${post.title}"
    >
      <div class="blog-card-thumb">
        <img
          src="${post.image}"
          alt="${post.imageAlt}"
          class="blog-card-img"
          loading="lazy"
        />
        <span class="blog-card-category">${post.category}</span>
      </div>
      <div class="blog-card-body">
        <time class="blog-card-siCalendar" datetime="${post.date}">${post.dateLabel}</time>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <a href="${_blogUrl(post.id)}" class="blog-card-read" aria-label="Read more: ${post.title}">
          Read More
          ${_iconHtml("siArrowRight")}
        </a>
      </div>
    </article>`;
}

function _renderRelatedCard(post) {
  return `
    <a href="${_blogUrl(post.id)}" class="bd-related-item">
      <div class="bd-related-thumb">
        <img src="${post.image}" alt="${post.imageAlt}" loading="lazy" />
      </div>
      <div class="bd-related-body">
        <span class="blog-post-category">${post.category}</span>
        <p class="bd-related-title">${post.title}</p>
        <span class="bd-related-meta">${post.dateLabel} · ${post.readTime}</span>
      </div>
    </a>`;
}

function _collectTagCounts(posts) {
  const counts = {};
  posts.forEach((post) => {
    (post.tags || []).forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function _getPosts() {
  return window.Portfolio.BLOG_ORDER.map(
    (id) => window.Portfolio.BLOGS[id],
  ).filter(Boolean);
}

function _getGalleryPosts() {
  return window.Portfolio.BLOG_GALLERY_ORDER.map(
    (id) => window.Portfolio.BLOGS[id],
  ).filter(Boolean);
}

function _refreshSkeleton(root) {
  const scope =
    root && typeof root.querySelectorAll === "function" ? root : document;
  window.Portfolio?.SKELETON?.refresh?.(scope);
  document.dispatchEvent(new CustomEvent("si:contentUpdated"));
}

((window.Portfolio.BLOG_LIST = (function () {
  function init() {
    if (window.Portfolio.UTILS.getActivePage() !== "blogs") return;

    const posts = _getPosts();
    const gallery = document.getElementById("blogsGrid");
    const recent = document.getElementById("blogRecentList");
    const topics = document.getElementById("blogTopicsGrid");
    const topReads = document.getElementById("blogTopReads");

    if (gallery && posts.length) {
      gallery.innerHTML = _getGalleryPosts()
        .map((post) => _renderGalleryCard(post))
        .join("");
    }

    if (recent) {
      recent.innerHTML = posts.map(_renderRecentItem).join("");
    }

    if (topics) {
      const topicConfig = [
        { slug: "backend", name: "Backend", count: 3 },
        { slug: "frontend", name: "Frontend", count: 3 },
        { slug: "wordpress", name: "WordPress", count: 1 },
        { slug: "architecture", name: "Architecture", count: 1 },
        { slug: "ui-ux", name: "UI/UX Design", count: 1 },
        { slug: "designs-system", name: "Designs System", count: 1 },
      ];
      topics.innerHTML = topicConfig
        .map((topic) => _renderTopicCard(topic.name, topic.count, topic.slug))
        .join("");
    }

    if (topReads) {
      topReads.innerHTML = posts
        .slice(0, 3)
        .map((post) => _renderTopRead(post))
        .join("");
    }

    if (window.Portfolio.ANIMATIONS?.initScrollReveal) {
      window.Portfolio.ANIMATIONS.initScrollReveal();
    }

    if (window.Portfolio.BLOG_PAGE?.init) {
      window.Portfolio.BLOG_PAGE.init();
    }

    _hydrateBlogIcons(document.querySelector(".blog-page") || document);
    _refreshSkeleton(document.querySelector(".blog-page") || document);
  }

  return { init };
})()),
  (window.Portfolio.BLOG_DETAILS = (function () {
    function init() {
      if (window.Portfolio.UTILS.getActivePage() !== "blog-details") return;

      const id = _resolveBlogId();
      const post = window.Portfolio.BLOGS[id];

      if (!post) {
        console.warn("[blogs-data.js] Unknown blog id:", id, "— redirecting.");
        window.location.href = "/blogs";
        return;
      }

      const canonicalTarget = _blogUrl(id);
      const normalizedPath = window.location.pathname.replace(/\/+$/, "");
      const currentPath = normalizedPath + window.location.search;
      if (currentPath !== canonicalTarget) {
        window.history.replaceState(null, "", canonicalTarget);
      }

      document.title = `${post.title} — M Sohaib Ishaque`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", post.excerpt);

      const setText = (elId, text) => {
        const el = document.getElementById(elId);
        if (el) el.textContent = text;
      };

      setText("bdBreadcrumbCategory", post.category);
      setText("bdBreadcrumbTitle", post.title);
      setText("bdCategory", post.category);
      setText("bdTitle", post.title);
      setText("bdExcerpt", post.excerpt);
      setText("bdAuthor", post.author);
      setText("bdReadTime", post.readTime);

      const dateEl = document.getElementById("bdsiCalendar");
      if (dateEl) {
        dateEl.textContent = post.dateLabel;
        dateEl.setAttribute("datetime", post.date);
      }

      const hero = document.getElementById("bdHero");
      if (hero) {
        hero.style.setProperty("--bd-hero-image", `url("${post.image}")`);
      }

      const heroTags = document.getElementById("bdHeroTags");
      if (heroTags) {
        heroTags.innerHTML = (post.tags || [])
          .slice(0, 3)
          .map((tag) => `<span class="meta-tag">${tag}</span>`)
          .join("");
      }

      const toc = document.getElementById("tocNav");
      if (toc) {
        toc.innerHTML = _renderToc(post.content);
      }

      if (post.sidebarCta) {
        setText("bdSidebarCtaTitle", post.sidebarCta.title);
        setText("bdSidebarCtaText", post.sidebarCta.text);
        const ctaLink = document.getElementById("bdSidebarCtaLink");
        if (ctaLink) {
          ctaLink.textContent = post.sidebarCta.linkText;
          ctaLink.href = post.sidebarCta.href || "/contact";
        }
      }

      const body = document.getElementById("bdArticleBody");
      if (body) {
        body.innerHTML = _renderArticleBody(post.content, post);
      }

      if (post.preFooter) {
        setText("bdPreFooterTitle", post.preFooter.title);
        setText("bdPreFooterText", post.preFooter.text);
        const features = document.getElementById("bdPreFooterFeatures");
        if (features) {
          features.innerHTML = _renderPreFooterFeatures(
            post.preFooter.features,
          );
        }
        const preFooterCta = document.getElementById("bdPreFooterCta");
        if (preFooterCta) {
          preFooterCta.textContent = post.preFooter.ctaText;
          preFooterCta.href = post.preFooter.ctaHref || "/contact";
        }
      }

      const related = document.getElementById("bdRelated");
      if (related) {
        const others = window.Portfolio.BLOG_ORDER.filter(
          (blogId) => blogId !== id,
        )
          .slice(0, 3)
          .map((blogId) => window.Portfolio.BLOGS[blogId]);
        related.innerHTML = others.map(_renderRelatedCard).join("");
      }

      const tagsEl = document.getElementById("bdTags");
      if (tagsEl) {
        const allTags = _collectTagCounts(_getPosts());
        tagsEl.innerHTML = allTags
          .slice(0, 8)
          .map(
            ([tag, count]) =>
              `<span class="bd-tag">${tag} <span class="bd-tag-count">${count}</span></span>`,
          )
          .join("");
      }

      const nav = document.getElementById("bdPostNav");
      if (nav) {
        const prev = post.prevBlog
          ? (() => {
              const p = window.Portfolio.BLOGS[post.prevBlog.id];
              return `
            <a href="${_blogUrl(post.prevBlog.id)}" class="bd-post-nav-card">
              <div class="bd-post-nav-arrow" aria-hidden="true">${_iconHtml("siAngleLeft")}</div>
              <div class="bd-post-nav-thumb"><img src="${_thumbUrl(p.image)}" alt="" loading="lazy" /></div>
              <div>
                <span class="bd-post-nav-label">Previous Article</span>
                <span class="bd-post-nav-title">${post.prevBlog.title}</span>
              </div>
            </a>`;
            })()
          : "<div></div>";
        const next = post.nextBlog
          ? (() => {
              const n = window.Portfolio.BLOGS[post.nextBlog.id];
              return `
            <a href="${_blogUrl(post.nextBlog.id)}" class="bd-post-nav-card bd-post-nav-card--next">
              <div class="bd-post-nav-arrow" aria-hidden="true">${_iconHtml("siAngleRight")}</div>
              <div class="bd-post-nav-thumb"><img src="${_thumbUrl(n.image)}" alt="" loading="lazy" /></div>
              <div>
                <span class="bd-post-nav-label">Next Article</span>
                <span class="bd-post-nav-title">${post.nextBlog.title}</span>
              </div>
            </a>`;
            })()
          : "<div></div>";
        nav.innerHTML = prev + next;
      }

      if (window.Portfolio.ANIMATIONS?.initScrollReveal) {
        window.Portfolio.ANIMATIONS.initScrollReveal();
      }
      if (window.Portfolio.BLOG_PAGE?.initDetail) {
        window.Portfolio.BLOG_PAGE.initDetail(post);
      }

      _hydrateBlogIcons(
        document.querySelector(".blog-details-page") || document,
      );
      _refreshSkeleton(
        document.querySelector(".blog-details-page") || document,
      );
    }

    return { init };
  })()),
  (window.Portfolio.BLOG_LINKS = (function () {
    const titleMap = {};
    Object.values(window.Portfolio.BLOGS).forEach((post) => {
      titleMap[post.title.trim().toLowerCase()] = post.id;
    });

    function wireCard(card) {
      const titleEl = card.querySelector(".blog-card-title");
      const linkEl = card.querySelector(".blog-card-read");
      if (!titleEl || !linkEl) return;
      const slug = titleMap[titleEl.textContent.trim().toLowerCase()];
      if (slug) linkEl.href = _blogUrl(slug);
    }

    function bindCards(section) {
      const { $$: queryAll } = window.Portfolio.UTILS;
      queryAll(".blog-card", section).forEach((card) => {
        wireCard(card);
        const readLink = card.querySelector(".blog-card-read");
        card.addEventListener("click", (event) => {
          if (event.target.closest(".blog-card-read")) return;
          if (readLink) readLink.click();
        });
        card.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            if (readLink) readLink.click();
          }
        });
      });
    }

    function renderHomeSection(section) {
      const grid = document.getElementById("homeBlogsGrid");
      if (!grid) return;

      const posts = _getPosts().slice(0, 4);
      grid.innerHTML = posts.map(_renderHomeBlogCard).join("");

      if (window.Portfolio.ANIMATIONS?.initScrollReveal) {
        window.Portfolio.ANIMATIONS.initScrollReveal();
      }

      _hydrateBlogIcons(section);
      bindCards(section);
    }

    return {
      init: function () {
        const page = window.Portfolio.UTILS.getActivePage();
        if (page === "home") {
          const section = document.getElementById("blogs");
          if (section) renderHomeSection(section);
          const viewAll = section && section.querySelector(".blogs-footer a");
          if (viewAll) viewAll.href = "/blogs";
        }
      },
    };
  })()),
  (function () {
    function _initBlogModules() {
      window.Portfolio.BLOG_LIST.init();
      window.Portfolio.BLOG_DETAILS.init();
      window.Portfolio.BLOG_LINKS.init();
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", _initBlogModules);
    } else {
      _initBlogModules();
    }
  })());
