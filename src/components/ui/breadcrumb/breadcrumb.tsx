"use client";

import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  console.log({ pathname });

  return (
    <div className="flex items-center space-x-2">
      {/*{crumbs.map((crumb) => (*/}
      {/*  <span key={crumb.name} className="text-sm text-slate-600">*/}
      {/*    {crumb.name}*/}
      {/*  </span>*/}
      {/*))}*/}
    </div>
  );
};

export { Breadcrumb };
