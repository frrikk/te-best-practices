// Contributers.jsx
import Image from "next/image";
import { cn } from "@/utils/cn";

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface ContributersProps {
  contributors: Contributor[];
}

const mockedContributors: Contributor[] = [
  {
    avatar_url: "https://avatars.githubusercontent.com/u/85999465?v=4",
    html_url: "",
    id: 21,
    login: "mojombo",
  },
  {
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "",
    id: 14444,
    login: "mojombo",
  },
  {
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "",
    id: 1412,
    login: "mojombo",
  },
  {
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "",
    id: 1123,
    login: "mojombo",
  },
];

const Contributers = ({ contributors }: ContributersProps) => {
  // Limit to first 5 contributors
  const displayedContributors = mockedContributors.slice(0, 4);
  const extraContributorsCount =
    mockedContributors.length - displayedContributors.length;

  return (
    <div className={cn("flex items-center gap-1")}>
      <span className={cn("text-sm text-slate-500")}>🤘</span>
      <ul className={cn("flex -space-x-2")}>
        {displayedContributors.map((user, index) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <Image
                width={24}
                height={24}
                src={user.avatar_url}
                alt={user.login}
                className={cn("rounded-full border-2 border-white-100")}
              />
            </a>
          </li>
        ))}
        {extraContributorsCount > 0 && (
          <li className={cn(`z-${displayedContributors.length}`)}>
            <button
              className={cn(
                "flex items-center justify-center w-6 h-6 text-[10px] font-bold text-purple-950 bg-slate-200 rounded-full border-2 border-white",
              )}
            >
              +{extraContributorsCount}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export { Contributers };
