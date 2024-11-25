import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/ui/heading/heading";
import { SubRouteNavigation } from "@/app/(routes)/(data-management)/sub-routes";

interface PageProps extends PropsWithChildren {
  className?: string;
  subLinks?: SubRouteNavigation[];
  heading: string;
}

const Page = ({ children, className, heading }: PageProps) => {
  return (
    <main className={cn("p-6 max-w-[84ch] animate-fadeInChildren", className)}>
      <Heading heading={heading} />
      <div className={cn("my-3")}>{children}</div>
    </main>
  );
};

Page.displayName = "Page";

export { Page };
