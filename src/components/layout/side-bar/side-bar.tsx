import { cn } from "@/utils/cn";

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
  return <aside className={cn("border-r-2", className)}>Sidebar</aside>;
};

SideBar.displayname = "SideBar";

export { SideBar };
