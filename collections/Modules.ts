import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const Modules: CollectionConfig = {
  slug: 'modules',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text' },
    { name: 'description', type: 'richText' },
    ...slugField(),
  ],
}
