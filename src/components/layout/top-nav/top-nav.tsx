import { cn } from "@/utils/cn";

interface TopNavProps {
  className?: string;
}

const TopNav = ({ className }: TopNavProps) => {
  return (
    <header className={cn("border-b-2 flex items-center p-6", className)}>
      <nav className={cn("flex gap-8")}>Top nav</nav>
    </header>
  );
};

TopNav.displayName = "TopNav";

export { TopNav };
