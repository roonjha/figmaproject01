import { createClient } from "next-sanity";

// Replace with your actual project ID and dataset name
export const client = createClient({
  projectId: '7aypzxg', // Replace with your actual project ID
  dataset: 'production', // Replace with your actual dataset name
  useCdn: true, // `true` for faster responses and caching, `false` for real-time data
  apiVersion: '2023-01-01', // Replace with the correct API version based on your needs
});
