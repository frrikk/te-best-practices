import { Page } from "@/components/layout/page/page";
import About from "./markdown/about.mdx";
import MdxLayout from "@/components/markdown/mdx-layout";
import { Author } from "@/components/ui/author/author";

const getContributers = async () => {
  const res = await fetch(
    "https://api.github.com/repos/frrikk/te-best-practices/contributors",
  );
  return await res.json();
};

export default async function DashboardPage() {
  const contributers = await getContributers();
  return (
    <Page heading="Welcome">
      <MdxLayout>
        <About />
      </MdxLayout>
      <Author githubUsername="frrikk" authors={contributers} />
    </Page>
  );
}
