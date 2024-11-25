import { cn } from "@/utils/cn";
import { subRoutes as dataManagementSubRoutes } from "@/app/(routes)/(data-management)/sub-routes";
import { subRoutes as compositionSubRoutes } from "@/app/(routes)/(composition)/sub-routes";
import { subRoutes as startingOutSubRoutes } from "@/app/(routes)/(starting-out)/sub-routes";
import { SidebarSection } from "@/components/ui/sidebar/sidebar-section";

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
  return (
    <aside className={cn("border-r p-6 text-sm", className)}>
      <nav className={cn("flex flex-col gap-4")}>
        <SidebarSection
          data={startingOutSubRoutes}
          sectionHeading="Starting out"
        />
        <SidebarSection
          data={dataManagementSubRoutes}
          sectionHeading="Data management"
        />
        <SidebarSection data={[]} sectionHeading="Styling" />
        <SidebarSection
          data={compositionSubRoutes}
          sectionHeading="Component composition"
        />
      </nav>
    </aside>
  );
};

SideBar.displayname = "SideBar";

export { SideBar };
