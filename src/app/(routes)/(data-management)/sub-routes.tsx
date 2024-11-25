import { ReactNode } from "react";

export interface SubRouteNavigation {
  name: string;
  href: string;
  icon?: ReactNode;
  subNav?: SubRouteNavigation[];
}

const subRoutes: SubRouteNavigation[] = [
  {
    name: "Forms",
    href: "/forms",
  },
  {
    name: "Prisma",
    href: "/prisma",
  },
  {
    name: "Fetching strategies",
    href: "/data-fetching",
  },
  {
    name: "API",
    href: "/dashboard",
  },
];

export { subRoutes };
