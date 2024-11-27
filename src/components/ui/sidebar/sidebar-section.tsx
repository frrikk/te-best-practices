import { Sidebar } from "@/components/ui/sidebar/index";
import { SubRouteNavigation } from "@/app/(routes)/(data-management)/sub-routes";

interface SidebarSectionProps {
  data: SubRouteNavigation[];
  sectionHeading: string;
}

const SidebarSection = ({ data, sectionHeading }: SidebarSectionProps) => {
  return (
    <section>
      <Sidebar.SectionHeading>{sectionHeading}</Sidebar.SectionHeading>
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
