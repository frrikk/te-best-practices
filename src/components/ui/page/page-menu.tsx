"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { SubRouteNavigation } from "@/app/(routes)/(composition)/sub-routes";

interface PageMenuProps {
  routes: SubRouteNavigation[];
}

const PageMenu = ({ routes }: PageMenuProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex gap-3 animate-fadeIn items-center sticky top-0 py-4 bg-sky-50/40 border-b border-sky-100 px-6 backdrop-blur-xl",
      )}
    >
      {routes.map((route) => (
        <Link
          key={route.name}
          href={route.href}
          className={cn(
            "text-xs px-3 py-1 border border-slate-300 rounded-full",
            {
              "text-sky-900 bg-sky-100 px-3 py-1 border-sky-400 rounded-full transition duration-100 ease-in-out":
                pathname === route.href,
              "text-slate-500": pathname !== route.href,
            },
          )}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};

export { PageMenu };
