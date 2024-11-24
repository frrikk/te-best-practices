import { SidebarListItem } from "@/components/ui/sidebar/sidebar-list-item";
import { SidebarHeading } from "@/components/ui/sidebar/sidebar-heading";
import { SidebarList } from "@/components/ui/sidebar/sidebar-list";

export const Sidebar = {
  Heading: SidebarHeading,
  List: SidebarList,
  ListItem: SidebarListItem,
} as const;
