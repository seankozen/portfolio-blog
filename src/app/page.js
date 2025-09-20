import ProjectSection from "./components/ProjectSection";
import PostsSection from "./components/PostsSection";
import { client } from "../sanity/lib/client";
import Link from "next/link";
import { getAuthor } from "@/sanity/lib/getAuthor";
import HeroSection from "./components/HeroSection";

const query = `*[_type == "project"]{
  _id, name, githubUrl, image, projectUrl, description, fullDescription, tags[]{svgPath}, techStack
}`;

const projects = await client.fetch(query);

export default async function Home() {
  const author = await getAuthor("sean-kozen");
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <ProjectSection projects={projects} />
      <PostsSection />
    </div>
  );
}
