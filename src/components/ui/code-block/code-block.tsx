"use client";

import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import { cn } from "@/utils/cn";

interface CodeProps {
  code: string;
  language?: string;
  filename: string;
}

const Code = ({ code, language = "ts", filename }: CodeProps) => {
  return (
    <CodeBlock code={code} language={language} theme={themes.oneLight}>
      <div className="bg-neutral-50/50 border p-6 rounded-md text-sm">
        <div className="text-sm text-gray-400 pb-3">{filename}</div>
        <CodeBlock.Code className={cn("flex flex-col gap-1.5")}>
          <CodeBlock.LineContent className={cn("flex flex-wrap")}>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
      </div>
    </CodeBlock>
  );
};

export { Code };
