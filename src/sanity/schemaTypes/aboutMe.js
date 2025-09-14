import { validation } from "sanity";

export default {
  name: "aboutMe",
  title: "About Me",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "workHistory",
      title: "Work History",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "block",
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        },
      ],
    },
  ],
};
