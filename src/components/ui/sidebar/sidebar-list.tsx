import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

const SidebarList = ({ children }: PropsWithChildren) => {
  return (
    <ul className={cn("flex flex-col gap-2 mt-2 relative")}>
      <div className={cn("absolute left-2 z-0 w-0.5 h-full bg-slate-200")} />
      {children}
    </ul>
  );
};

export { SidebarList };
