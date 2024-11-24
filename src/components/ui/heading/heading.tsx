import { cn } from "@/utils/cn";

interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps) => {
  return <h1 className={cn("text-2xl font-semibold")}>{heading}</h1>;
};

export { Heading };
