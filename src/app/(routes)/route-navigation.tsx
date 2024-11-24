import { ReactNode } from "react";

export interface RouteNavOption {
  name: string;
  href: string;
  icon?: ReactNode;
  subNav?: RouteNavOption[];
}

const routeNavigation: RouteNavOption[] = [
  {
    name: "Forms",
    href: "/forms",
    subNav: [
      {
        name: "Server actions",
        href: "/forms/server-actions",
      },
      {
        name: "React Hook Form",
        href: "/forms/react-hook-form",
      },
    ],
  },
  {
    name: "Data fetching",
    href: "/data-fetching",
  },
  {
    name: "API",
    href: "/dashboard",
  },
];

export { routeNavigation };
