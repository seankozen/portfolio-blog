import { client } from "@/sanity/lib/client";

const query = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  "author": author->name,
  mainImage{
    alt,
    asset->{
      _id,
      url
    }
  },
  categories[]->{
    title
  },
  body[]{
    _type,
    text[]{
      ... // portable text blocks
    },
    image{
      alt,
      asset->{
        _id,
        url
      }
    }
  }
}`;

export async function getPost(slug) {
  return await client.fetch(query, { slug });
}
