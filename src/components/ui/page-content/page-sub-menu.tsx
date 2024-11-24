"use client";

import { RouteNavOption } from "@/app/(routes)/route-navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

interface SubMenuProps {
  routes: RouteNavOption[];
}

const SubMenu = ({ routes }: SubMenuProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex gap-3 items-center sticky top-0 pt-6 px-6 backdrop-blur-xl",
      )}
    >
      {routes.map((route) => (
        <Link
          key={route.name}
          href={route.href}
          className={cn("text-sm px-3 py-1 border rounded-full", {
            "text-sky-900 bg-sky-100 px-3 py-1 border-sky-400 text-sm rounded-full":
              pathname === route.href,
            "text-slate-500": pathname !== route.href,
          })}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
};

export { SubMenu };
