import { cn } from "@/utils/cn";

interface SidebarHeadingProps {
  children: string;
}

const SidebarMainHeading = ({ children }: SidebarHeadingProps) => {
  return (
    <h1
      className={cn(
        "text-md text-sky-900 font-semibold px-3 py-2 border bg-sky-50 text-sky-900 mt-2 rounded-md w-fit",
      )}
    >
      {children}
    </h1>
  );
};

const SidebarHeading = ({ children }: SidebarHeadingProps) => {
  return <h2 className={cn("font-bold")}>{children}</h2>;
};

export { SidebarHeading, SidebarMainHeading };
