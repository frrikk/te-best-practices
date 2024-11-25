import { PropsWithChildren } from "react";
import { PageMenu } from "@/components/ui/page/page-menu";
import { SubRouteNavigation } from "@/app/(routes)/(data-management)/sub-routes";

const routes: SubRouteNavigation[] = [
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
      <PageMenu routes={routes} />
      {children}
    </>
  );
}
