import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getAboutMe } from "../../../sanity/lib/getAboutMe";

const components = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    code: ({ value }) => (
      <pre className="bg-gray-900 text-green-300 p-4 rounded-md overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
  },
};

export default async function AboutMePage({ params }) {
  // destructure slug directly
  const { slug } = await params;

  // fetch the author
  const aboutMe = await getAboutMe(slug);

  if (!aboutMe) return <div>About Me not found</div>;

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-60">
      <h1 className="text-5xl font-bold mb-5 leading-normal text-center">
        About Me
      </h1>
      {aboutMe.image?.asset?.url && (
        <div className="mx-auto flex justify-center">
          <Image
            src={aboutMe.image.asset.url}
            alt={aboutMe.name}
            width={160}
            height={160}
            className="w-40 h-40 rounded-full mb-6 object-cover"
          />
        </div>
      )}

      <h2 className="text-4xl font-bold mb-4">{aboutMe.name}</h2>

      {aboutMe.workHistory && (
        <>
          <div className="prose mb-10">
            <PortableText value={aboutMe.workHistory} components={components} />
          </div>
          <div className="prose mb-10">
            <PortableText value={aboutMe.skills} components={components} />
          </div>
        </>
      )}
    </div>
  );
}
