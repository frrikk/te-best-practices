import { Sidebar } from "@/components/ui/sidebar/index";
import { RouteNavOption } from "@/app/(routes)/route-navigation";
import { cn } from "@/utils/cn";

interface SidebarSectionProps {
  data: RouteNavOption[];
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
