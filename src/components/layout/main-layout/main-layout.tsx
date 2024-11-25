import { cn } from "@/utils/cn";
import { SideBar } from "@/components/layout/side-bar/side-bar";
import { Page } from "@/components/layout/page/page";
import { TopNav } from "@/components/layout/top-nav/top-nav";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn("h-screen flex flex-col overflow-hidden")}>
      <div className={cn("w-full")}>
        <TopNav className={cn("h-24 sticky top-0 z-10")} />
      </div>
      <div className={cn("flex flex-1 overflow-hidden")}>
        <SideBar className={cn("h-full w-64 sticky top-0 z-10")} />
        <section className={cn("flex-1 overflow-y-auto")}>{children}</section>
      </div>
    </div>
  );
};

export { MainLayout };
