import { cn } from "@/utils/cn";

const TopNav = () => {
  return (
    <header className={cn("bg-blue-100 col-span-9 row-span-1")}>
      <nav>Navbar</nav>
    </header>
  );
};

TopNav.displayName = "TopNav";

export { TopNav };
