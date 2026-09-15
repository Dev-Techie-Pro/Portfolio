"use client";

import { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PAGE_BODY_CLASS, type PortfolioRoute } from "@/lib/portfolio/script-config";
import { PortfolioScripts, waitForPortfolioScripts } from "./PortfolioScripts";
import { initPortfolioPage, resetPortfolioForNavigation } from "@/lib/portfolio/init-portfolio";

type PortfolioPageProps = {
  route: PortfolioRoute;
  children: React.ReactNode;
};

/**
 * Wraps each route's page content and re-initializes the legacy Portfolio.*
 * runtime after client-side Next.js navigations (mirrors full page reload behavior).
 */
export function PortfolioPage({ route, children }: PortfolioPageProps) {
  const pathname = usePathname();

  const runInit = useCallback(async () => {
    await waitForPortfolioScripts(route);
    resetPortfolioForNavigation();
    initPortfolioPage(route);
  }, [route]);

  useEffect(() => {
    const bodyClass = PAGE_BODY_CLASS[route];
    if (bodyClass) {
      document.body.classList.add(...bodyClass.split(/\s+/).filter(Boolean));
    }
    return () => {
      if (bodyClass) {
        document.body.classList.remove(...bodyClass.split(/\s+/).filter(Boolean));
      }
    };
  }, [route]);

  useEffect(() => {
    void runInit();
  }, [pathname, runInit]);

  return (
    <>
      {children}
      <PortfolioScripts route={route} onScriptsReady={() => void runInit()} />
    </>
  );
}
