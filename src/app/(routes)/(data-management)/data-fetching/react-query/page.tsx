import { Page } from "@/components/layout/page/page";
import { Code } from "@/components/ui/code-block/code-block";
import { PageContent } from "@/components/ui/page/page-content";

export default function ReactQueryPage() {
  return (
    <Page heading="React Query">
      <PageContent>
        <Code filename="QueryProvider" code={code} />
      </PageContent>
    </Page>
  );
}

const code = `
Code
`;
