import { client } from "@/sanity/lib/client";

const query = `*[_type == "author" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  image{
    asset->{
      _id,
      url
    }
  },
  bio,
  "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc){
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
    }
  }
}`;

export async function getAuthor(slug) {
  return await client.fetch(query, { slug });
}
