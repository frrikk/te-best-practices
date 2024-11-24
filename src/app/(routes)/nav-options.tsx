import { ReactNode } from "react";

interface NavOption {
  name: string;
  href: string;
  icon?: ReactNode;
}

const navOptions: NavOption[] = [
  {
    name: "Home",
    href: "/dashboard",
  },
  {
    name: "Forms",
    href: "/forms",
  },
  {
    name: "Data fetching",
    href: "/data-fetching",
  },
];

export { navOptions };
