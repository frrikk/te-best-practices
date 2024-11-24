import { cn } from "@/utils/cn";
import { SideBar } from "@/components/layout/side-bar/side-bar";
import { Page } from "@/components/layout/page/page";
import { TopNav } from "@/components/layout/top-nav/top-nav";

const MainLayout = () => {
  return (
    <div className={cn("h-dvh grid grid-cols-12 grid-rows-12 bg-slate-100")}>
      <SideBar />
      <TopNav />
      <Page />
    </div>
  );
};

export { MainLayout };
