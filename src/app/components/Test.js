// import { client } from "@/sanity/lib/client";

// export default async function TestPage() {
//   const projects = await client.fetch(
//     `*[_type=="project"] | order(_createdAt desc)`
//   );
//   console.log(projects);
//   console.log("Fetched projects:", projects);

//   return <pre>{JSON.stringify(projects, null, 2)}</pre>;
// }

import { createClient } from "next-sanity";

const client = createClient({
  projectId: "8cp5cptd", // hard-coded for testing
  dataset: "portfolio-blog",
  apiVersion: "2023-10-01",
  useCdn: false, // ensure fresh data
});

export default async function TestPage() {
  const projects = await client.fetch(`*[_type=="project"]{_id, name}`);
  console.log("Fetched projects:", projects);

  return <pre>{JSON.stringify(projects, null, 2)}</pre>;
}
