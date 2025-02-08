import { type SchemaTypeDefinition } from 'sanity'; // Removed defineType
import products from './products';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
};
