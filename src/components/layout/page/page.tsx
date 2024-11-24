import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

const Page = ({ children }: PropsWithChildren) => {
  return <main className={cn("bg-green-100")}>Page{children}</main>;
};

Page.displayName = "Page";

export { Page };
