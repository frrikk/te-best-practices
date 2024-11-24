import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";
import { Heading } from "@/components/ui/heading/heading";
import { RouteNavOption } from "@/app/(routes)/route-navigation";

interface PageProps extends PropsWithChildren {
  className?: string;
  subLinks?: RouteNavOption[];
  heading: string;
}

const Page = ({ children, className, heading }: PageProps) => {
  return (
    <main className={cn("p-6 max-w-[84ch] animate-fadeInChildren", className)}>
      <Heading heading={heading} />
      {children}
    </main>
  );
};

Page.displayName = "Page";

export { Page };
