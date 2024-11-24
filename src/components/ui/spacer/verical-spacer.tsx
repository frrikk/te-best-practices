import { cn } from "@/utils/cn";

interface SpacerProps {
  space: "xs" | "sm" | "md" | "lg" | "xl";
}

const VeritcalSpacer = ({ space }: SpacerProps) => (
  <div
    className={cn("", {
      "my-1": space === "xs",
      "my-2": space === "sm",
      "my-4": space === "md",
      "my-8": space === "lg",
      "my-16": space === "xl",
    })}
  />
);

export { VeritcalSpacer };
