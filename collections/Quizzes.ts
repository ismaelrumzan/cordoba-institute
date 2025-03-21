import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const Quizzes: CollectionConfig = {
  slug: 'quizzes',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text' },
    { name: 'type', type: 'select', options: ['t/f', 'single', 'multiple'] },
    {
      name: 'answers',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'correct', type: 'checkbox' },
      ],
    },
    {
      name: 'feedback',
      type: 'richText',
    },
    ...slugField(),
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
