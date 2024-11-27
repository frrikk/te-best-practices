import { Page } from "@/components/layout/page/page";
import About from "./markdown/about.mdx";
import { cn } from "@/utils/cn";
import MdxLayout from "@/components/markdown/mdx-layout";

export default function DashboardPage() {
  return (
    <Page heading="Welcome">
      <MdxLayout>
        <About />
      </MdxLayout>
    </Page>
  );
}
