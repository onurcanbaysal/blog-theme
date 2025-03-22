import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val))
				.optional(),
			heroImage: image(),
			category: z.array(z.enum(CATEGORIES)).min(1),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

export const collections = { blog }
