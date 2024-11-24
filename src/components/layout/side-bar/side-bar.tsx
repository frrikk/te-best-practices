import { cn } from "@/utils/cn";

const SideBar = () => {
  return (
    <aside className={cn("bg-red-100 row-span-12 col-span-3")}>Sidebar</aside>
  );
};

SideBar.displayname = "SideBar";

export { SideBar };
