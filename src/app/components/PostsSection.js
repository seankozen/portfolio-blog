import { client } from "../../sanity/lib/client";
import Link from "next/link";

const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  body,
  categories[]->{
    _id,
    title
  },
  author->{
    _id,
    name,
    image
  }
}`;

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export async function getPosts() {
  const posts = await client.fetch(query);
  return posts;
}
const posts = await getPosts();

const PostsSection = async () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8" id="blog">
      <div className="flex gap-12 sm:gap-24">
        <div className="w-72">
          <h2 className="text-4xl font-bold text-light">
            Latest from <br /> the blog
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-12">
          {posts.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post._id}
              className="group block"
            >
              <div>
                <article className="space-y-4">
                  <h3 className="text-2xl font-semibold text-light group-hover:text-primary-400 transition-colors mb-3">
                    {post.title}
                  </h3>
                </article>

                <div>
                  <time className="text-slate-300">
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;

/* <Link
              href={`/posts/${post.slug}`}
              key={post._id}
              className="group block"
            > */

/* </Link> */
