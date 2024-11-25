import { Sidebar } from "@/components/ui/sidebar/index";
import { SubRouteNavigation } from "@/app/(routes)/(data-management)/sub-routes";

interface SidebarSectionProps {
  data: SubRouteNavigation[];
  sectionHeading: string;
}

const SidebarSection = ({ data, sectionHeading }: SidebarSectionProps) => {
  return (
    <section>
      <Sidebar.Heading headingText={sectionHeading} />
      <Sidebar.List>
        {data.map((item) => (
          <Sidebar.ListItem key={item.name} href={item.href}>
            {item.name}
          </Sidebar.ListItem>
        ))}
      </Sidebar.List>
    </section>
  );
};

export { SidebarSection };
