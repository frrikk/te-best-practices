"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SidebarListItemProps {
  href: string;
  children: ReactNode;
}

const SidebarListItem = ({ href, children }: SidebarListItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={cn("px-2 grid items-center grid-cols-12 relative", {
        "text-sky-900": pathname.includes(href),
        "text-slate-500": !pathname.includes(href),
      })}
      href={href}
    >
      {pathname.includes(href) && <ActivePoint />}
      <span className={cn("col-start-2 col-span-11")}>{children}</span>
    </Link>
  );
};

export { SidebarListItem };

const ActivePoint = () => (
  <div
    className={cn(
      "h-full w-0.5 animate-activeItem col-span-1 rounded-full z-10 bg-sky-400",
    )}
  />
);
