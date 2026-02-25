// schemaTypes/course.ts
export const course = {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the calligraphy course',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'Beginner' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
        ],
        layout: 'radio', // Optional: makes it a radio selection in the UI
      },
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      initialValue: '6 Weeks',
    },
    {
      name: 'image',
      title: 'Course Image',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop the image inside Sanity Studio
      },
    },
    {
  name: 'imageUrl',
  title: 'Course Image URL',
  type: 'url', // Use 'url' type for validation
  description: 'Paste a direct link to an image (e.g., https://example.com/photo.jpg)',
},
    {
      name: 'description',
      title: 'Description',
      type: 'text', // Using 'text' instead of 'string' for longer content
    },
    {
      name: 'TagLine',
      title: 'TagLine',
      type: 'text', // Using 'text' instead of 'string' for longer content
    },
    {
      name: 'Price',
      title: 'Price',
      type: 'number', // Using 'number' type for price values
    },
  ],
}