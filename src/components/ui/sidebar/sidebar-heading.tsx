import { cn } from "@/utils/cn";

interface SidebarHeadingProps {
  headingText: string;
}

const SidebarHeading = ({ headingText }: SidebarHeadingProps) => {
  return <h2 className={cn("font-bold mb-2")}>{headingText}</h2>;
};

export { SidebarHeading };
