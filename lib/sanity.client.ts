// lib/sanity.client.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  , // Found in sanity.config.ts
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-24',
  useCdn: true, // Set to true for faster edge delivery
})

export async function getProducts() {
  return await client.fetch(`*[_type == "product"]{ name, price, _id }`)
}