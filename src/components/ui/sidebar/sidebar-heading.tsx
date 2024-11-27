import { cn } from "@/utils/cn";

interface SidebarHeadingProps {
  children: string;
}

const SidebarHeading = ({ children }: SidebarHeadingProps) => {
  return <h2 className={cn("font-bold")}>{children}</h2>;
};

const SidebarMainHeading = ({ children }: SidebarHeadingProps) => {
  return <h1 className={cn("text-lg font-semibold")}>{children}</h1>;
};

export { SidebarHeading, SidebarMainHeading };
