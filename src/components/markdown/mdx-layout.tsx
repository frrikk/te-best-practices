import { ReactNode } from "react";

export default function MdxLayout({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-headings:font-semibold prose-headings:text-black prose-h1:text-2xl prose-h2:text-1xl prose-h3:text-xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white prose-pre:bg-neutral-50/60 prose-pre:border prose-code:text-slate-700">
      {children}
    </article>
  );
}
