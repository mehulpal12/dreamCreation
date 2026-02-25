import { defineLive } from "next-sanity/live";
import { client } from "../sanity/client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  // Silence warnings if you don't have tokens set up yet
  serverToken: process.env.SANITY_API_READ_TOKEN || false, 
  browserToken: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN || false,
});