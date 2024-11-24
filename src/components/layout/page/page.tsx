import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

interface PageProps extends PropsWithChildren {
  className?: string;
}

const Page = ({ children, className }: PageProps) => {
  return <main className={cn("", className)}>{children}</main>;
};

Page.displayName = "Page";

export { Page };
