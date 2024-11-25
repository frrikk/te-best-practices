import { Page } from "@/components/layout/page/page";
import { PageContent } from "@/components/ui/page/page-content";

const DataFetchingPage = () => {
  return (
    <Page heading="Data fetching">
      <PageContent>
        Data fetching is the process of retrieving data from a source. This
        source can be a database, an API, or a file. The data can be fetched
        using different methods, such as HTTP requests, database queries, or
        file reads. Data fetching is an essential part of web development, as it
        allows applications to display dynamic content and interact with
        external services.
      </PageContent>
    </Page>
  );
};

export default DataFetchingPage;
