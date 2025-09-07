import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getAuthor } from "../../../sanity/lib/getAuthor";

export default async function AuthorPage({ params }) {
  // destructure slug directly
  const { slug } = await params;

  // fetch the author
  const author = await getAuthor(slug);

  if (!author) return <div>Author not found</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-bold mb-5 leading-normal text-center">
        About Me
      </h1>
      {author.image?.asset?.url && (
        <div className="mx-auto flex justify-center">
          <Image
            src={author.image.asset.url}
            alt={author.name}
            width={160}
            height={160}
            className="w-40 h-40 rounded-full mb-6 object-cover"
          />
        </div>
      )}

      <h2 className="text-4xl font-bold mb-4">{author.name}</h2>

      {author.bio && (
        <div className="prose mb-10">
          <PortableText value={author.bio} />
        </div>
      )}
    </div>
  );
}
