import { validation } from "sanity";

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "githubUrl",
      title: "Github URL",
      type: "url",
    },
    {
      name: "image",
      title: "Imgae",
      type: "image",
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "fullDescription",
      title: " Full Description",
      type: "text",
    },
    {
      name: "tags",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
