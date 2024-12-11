import Link from "next/link";
import Image from "next/image";

type Author = {
  id: number;
  login: string;
  avatar_url: string;
  profileUrl: string;
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
        profileUrl: contributor.profileUrl,
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
      <Link href={mappedAuthor.profileUrl}>
        <Image src={mappedAuthor.avatar_url} alt="Author image" />
      </Link>
    </div>
  );
};

export { Author };
