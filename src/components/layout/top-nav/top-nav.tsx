import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { Contributors } from "@/components/ui/contributers/contributors";

interface TopNavProps {
  className?: string;
}

const TopNav = ({ className }: TopNavProps) => {
  return (
    <header className={cn("border-b flex items-center p-6", className)}>
      <nav className={cn("flex gap-8 justify-between items-center w-full")}>
        <div className={cn("flex items-center gap-2 text-sm")}>
          <Image
            height={30}
            width={30}
            src="/te-logo.svg"
            alt="Tietoevry logo"
          />
          <span className={cn("text-purple-950")}>
            <strong>React Best Practices</strong>
          </span>
        </div>
        <div className={cn("flex items-center gap-2")}>
          <Contributors />
          <Link
            href="https://github.com/frrikk/te-best-practices"
            className={cn("p-2 rounded-lg border hover:bg-neutral-100 flex")}
          >
            <Image
              height={20}
              width={20}
              src="/github-mark.svg"
              alt="Go to GitHub repo"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

TopNav.displayName = "TopNav";

export { TopNav };
