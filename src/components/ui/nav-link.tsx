"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn("px-2 py-1", {
        "font-medium": pathname === href,
        "text-slate-500": pathname !== href,
      })}
      href={href}
    >
      {children}
    </Link>
  );
};

export { NavLink };
