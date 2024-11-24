import { cn } from "@/utils/cn";
import { navOptions } from "@/app/(routes)/nav-options";
import { NavLink } from "@/components/ui/nav-link";

interface TopNavProps {
  className?: string;
}

const TopNav = ({ className }: TopNavProps) => {
  return (
    <header className={cn("border-b-2 flex items-center", className)}>
      <nav className={cn("flex gap-8")}>
        {navOptions.map((option) => (
          <NavLink key={option.name} href={option.href}>
            {option.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

TopNav.displayName = "TopNav";

export { TopNav };
