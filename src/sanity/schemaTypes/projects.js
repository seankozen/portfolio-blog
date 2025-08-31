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
      title: "Image",
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
      of: [
        {
          type: "object",
          name: "svgIcon",
          title: "SVG Icon",
          fields: [
            { name: "name", title: "Icon Name", type: "string" },
            {
              name: "svgPath",
              title: "SVG Path",
              type: "string",
              description:
                "Path to the SVG file in /icons (e.g. /icons/react.svg)",
            },
          ],
        },
      ],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
