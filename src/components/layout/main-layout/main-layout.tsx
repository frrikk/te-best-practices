import { cn } from "@/utils/cn";
import { SideBar } from "@/components/layout/side-bar/side-bar";
import { TopNav } from "@/components/layout/top-nav/top-nav";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn("h-screen flex flex-col overflow-hidden")}>
      <TopNav className={cn("h-16 sticky top-0 z-10")} />
      <div className={cn("flex flex-1 overflow-hidden")}>
        <SideBar className={cn("h-full w-64 sticky top-0 z-10")} />
        <section className={cn("flex-1 overflow-y-auto")}>{children}</section>
      </div>
    </div>
  );
};

export { MainLayout };
