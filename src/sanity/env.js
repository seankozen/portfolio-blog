export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const netlifyAPI_Id = process.env.SANITY_STUDIO_NETLIFY_API_ID;
export const netlifyBuildHookId = process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK;
