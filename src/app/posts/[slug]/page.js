import { client } from "../../../sanity/lib/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

const query = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  "author": author->name,
  mainImage{
    asset->{
      url
    },
    alt
  },
  categories[]->{
    title
  },
  body
}`;

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20">
      <h1 className="text-5xl font-bold mb-5 leading-normal text-center">
        {post.title}
      </h1>
      <div className="rich-text">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}

//  <p>By {post.author}</p>
//       <time>{new Date(post.publishedAt).toDateString()}</time>
//       {post.mainImage && (
//         <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
//       )}
