import { PropsWithChildren } from "react";

const PageContent = ({ children }: PropsWithChildren) => {
  return <section>{children}</section>;
};

export { PageContent };
