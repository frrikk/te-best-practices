import { cn } from "@/utils/cn";
import { routeNavigation } from "@/app/(routes)/route-navigation";
import { SidebarSection } from "@/components/ui/sidebar/sidebar-section";

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
  return (
    <aside className={cn("border-r-2 p-6", className)}>
      <nav className={cn("flex flex-col gap-4")}>
        <SidebarSection data={routeNavigation} sectionHeading="Components" />
      </nav>
    </aside>
  );
};

SideBar.displayname = "SideBar";

export { SideBar };
