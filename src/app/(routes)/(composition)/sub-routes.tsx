import { ReactNode } from "react";

export interface SubRouteNavigation {
  name: string;
  href: string;
  icon?: ReactNode;
  subNav?: SubRouteNavigation[];
}

const subRoutes: SubRouteNavigation[] = [
  {
    name: "Layout components",
    href: "/component-composition",
  },
];

export { subRoutes };
