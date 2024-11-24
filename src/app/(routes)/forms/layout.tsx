import { PropsWithChildren } from "react";
import { RouteNavOption } from "@/app/(routes)/route-navigation";
import { VeritcalSpacer } from "@/components/ui/spacer/verical-spacer";
import { PageContent } from "@/components/ui/page-content";

const routes: RouteNavOption[] = [
  {
    name: "/",
    href: "/forms",
  },
  {
    name: "Server actions",
    href: "/forms/server-actions",
  },
  {
    name: "React Hook Form",
    href: "/forms/react-hook-form",
  },
];

export default function FormsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <PageContent.SubMenu routes={routes} />
      {children}
    </>
  );
}
