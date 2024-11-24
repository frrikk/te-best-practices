import { PropsWithChildren } from "react";
import { RouteNavOption } from "@/app/(routes)/route-navigation";
import { VeritcalSpacer } from "@/components/ui/spacer/verical-spacer";
import { PageContent } from "@/components/ui/page-content";

const routes: RouteNavOption[] = [
  {
    name: "/",
    href: "/data-fetching",
  },
  {
    name: "React Query",
    href: "/data-fetching/react-query",
  },
  {
    name: "React Server Components",
    href: "/data-fetching/react-server-components",
  },
];

export default function DataFetchingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <PageContent.SubMenu routes={routes} />
      <VeritcalSpacer space="sm" />
      {children}
    </>
  );
}
