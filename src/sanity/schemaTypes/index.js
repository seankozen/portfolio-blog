import projects from "./projects";
import { blog } from "./Blog";
import aboutMe from "./aboutMe";

export const schema = {
  types: [...blog, projects, aboutMe],
};
