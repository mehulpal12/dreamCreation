import { type SchemaTypeDefinition } from 'sanity'
import { course } from './course' // or whatever your schema file is named

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [course],
}