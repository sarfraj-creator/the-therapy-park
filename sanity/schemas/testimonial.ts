import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Client Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'content', title: 'Testimonial Text', type: 'text', rows: 5, validation: (R) => R.required().min(20).max(500) }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number', validation: (R) => R.required().min(1).max(5) }),
    defineField({ name: 'isAnonymous', title: 'Display as Anonymous', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})