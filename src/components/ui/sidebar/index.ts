import { SidebarListItem } from "@/components/ui/sidebar/sidebar-list-item";
import {
  SidebarHeading,
  SidebarMainHeading,
} from "@/components/ui/sidebar/sidebar-heading";
import { SidebarList } from "@/components/ui/sidebar/sidebar-list";

export const Sidebar = {
  MainHeading: SidebarMainHeading,
  SectionHeading: SidebarHeading,
  List: SidebarList,
  ListItem: SidebarListItem,
} as const;
