import { Page } from "@/components/layout/page/page";
import { Code } from "@/components/ui/code-block/code-block";

export default function ReactQueryPage() {
  return (
    <Page heading="React Query">
      <Code filename="QueryProvider" code={code} />
    </Page>
  );
}

const code = `
Code
`;
