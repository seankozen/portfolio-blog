import { client } from "../../../sanity/lib/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { getPost } from "@/sanity/lib/getPost";

export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose mx-auto px-4 sm:px-8 lg:px-40">
      <div className="container mx-auto p-8 pb-20 sm:p-20">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-5 leading-normal text-center">
          {post.title}
        </h1>

        {/* Main Image */}
        {post.mainImage && (
          <div className="mb-6">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={480} // adjust as needed
              height={270} // keep aspect ratio
              className="mx-auto w-[50%] h-auto rounded-xl"
            />
          </div>
        )}

        {/* Author and Date */}
        <p className="text-sm text-gray-500 mb-4">
          {post.author && `By ${post.author}`}{" "}
          {post.publishedAt &&
            `| ${new Date(post.publishedAt).toLocaleDateString()}`}
        </p>

        {/* Categories */}
        {post.categories?.length > 0 && (
          <p className="mb-6">
            Categories: {post.categories.map((cat) => cat.title).join(", ")}
          </p>
        )}

        {/* Body Blocks */}
        {post.body?.map((block, i) => (
          <section key={i} className="mb-10">
            {/* Block Image */}
            {block.image && (
              <div className="mb-4">
                <Image
                  src={block.image.asset.url}
                  alt={block.image.alt || ""}
                  width={480} // adjust as needed
                  height={270} // keep aspect ratio
                  className="mx-auto w-[50%] h-auto rounded-xl"
                />
              </div>
            )}

            {/* Block Text */}
            {block.text && <PortableText value={block.text} />}
          </section>
        ))}
      </div>
    </article>
  );
}
