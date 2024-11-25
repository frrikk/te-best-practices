import { ReactNode } from "react";

export interface SubRouteNavigation {
  name: string;
  href: string;
  icon?: ReactNode;
  subNav?: SubRouteNavigation[];
}

const subRoutes: SubRouteNavigation[] = [
  {
    name: "Choosing a framework",
    href: "/framework",
  },
  {
    name: "Project structure",
    href: "/starting-out",
  },
];

export { subRoutes };
