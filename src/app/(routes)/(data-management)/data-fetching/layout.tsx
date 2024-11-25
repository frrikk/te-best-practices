import { PropsWithChildren } from "react";
import { SubRouteNavigation } from "@/app/(routes)/(data-management)/sub-routes";
import { VeritcalSpacer } from "@/components/ui/spacer/verical-spacer";
import { PageMenu } from "@/components/ui/page/page-menu";

const routes: SubRouteNavigation[] = [
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
      <PageMenu routes={routes} />
      <VeritcalSpacer space="sm" />
      {children}
    </>
  );
}
