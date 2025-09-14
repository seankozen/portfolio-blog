import { client } from "@/sanity/lib/client";

const query = `*[_type == "aboutMe"][0]{
  name,
  "slug": slug.current,
  image{
    asset->{
      url
    }
  },
  workHistory,
  skills
}`;

export async function getAboutMe(slug) {
  return await client.fetch(query, { slug });
}
