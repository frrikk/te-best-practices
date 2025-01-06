import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";

type Author = {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
};

interface AuthorProps {
  authors: Author[];
  githubUsername: string;
}

const Author = ({ authors, githubUsername }: AuthorProps) => {
  const mappedAuthor = authors.find((contributor: Author) => {
    if (contributor.login === githubUsername) {
      return {
        id: contributor.id,
        url: contributor.url,
        avatar_url: contributor.avatar_url,
        login: contributor.login,
      };
    }
  });

  console.log("mappedAuthor", mappedAuthor);

  if (!mappedAuthor) {
    return null;
  }

  return (
    <div>
      Author:
      <Link href={mappedAuthor.url}>
        <Image
          className={cn("rounded-full border-2 border-white-100")}
          src={mappedAuthor.avatar_url}
          width={32}
          height={32}
          alt="Author image"
        />
      </Link>
    </div>
  );
};

export { Author };
