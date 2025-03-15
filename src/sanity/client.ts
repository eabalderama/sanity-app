import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "prabpzwy",
  dataset: "production",
  apiVersion: "2025-02-06",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});
