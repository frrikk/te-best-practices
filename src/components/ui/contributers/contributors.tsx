import Image from "next/image";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

const Contributors = async () => {
  const res = await fetch(
    "https://api.github.com/repos/frrikk/te-best-practices/contributors",
  );
  const data = (await res.json()) as Contributor[];

  console.log("fetching contributors", data);

  return (
    <div className={cn("flex items-center gap-1")}>
      <span className={cn("text-sm text-slate-500")}>🤝</span>
      <ul className={cn("flex -space-x-2")}>
        {data.map((user) => (
          <li key={user.id}>
            <Link
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={24}
                height={24}
                src={user.avatar_url}
                alt={user.login}
                className={cn("rounded-full border-2 border-white-100")}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Contributors };
