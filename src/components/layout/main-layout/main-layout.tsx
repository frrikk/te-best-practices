import { cn } from "@/utils/cn";
import { SideBar } from "@/components/layout/side-bar/side-bar";
import { Page } from "@/components/layout/page/page";
import { TopNav } from "@/components/layout/top-nav/top-nav";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cn("h-dvh flex")}>
      <div className={cn("h-full w-64")}>
        <SideBar className={cn("h-full p-4")} />
      </div>
      <div className={cn("flex flex-col flex-1")}>
        <TopNav className={cn("h-24 p-4")} />
        <Page className={cn("flex-1 p-4")}>{children}</Page>
      </div>
    </div>
  );
};

export { MainLayout };
