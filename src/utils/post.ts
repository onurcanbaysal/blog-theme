import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'
import { CATEGORIES } from '@/data/categories'
import { toAscii } from './sluglify'

export const getCategories = async () => {
	const posts = await getCollection('blog')
	const categories = new Set(
		posts.filter((post) => !post.data.draft)
			.flatMap((post) => post.data.category)
	)
	return Array.from(categories).sort((a, b) =>
		CATEGORIES.indexOf(a) < CATEGORIES.indexOf(b) ? -1 : 1
	)
}

function getEffectiveDate(post: CollectionEntry<'blog'>) {
	return post.data.updatedDate || post.data.pubDate;
}

export const getPosts = async (max?: number) => {
	return (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => {
			const dateA = getEffectiveDate(a)
			const dateB = getEffectiveDate(b)
			return dateB.valueOf() - dateA.valueOf()
		})
		.slice(0, max)
}

export const getTags = async () => {
	const posts = await getCollection('blog')
	const tags = new Set()
	posts
		.filter((post) => !post.data.draft)
		.forEach((post) => {
			post.data.tags.forEach((tag) => {
				if (tag != '') {
					tags.add(tag)
				}
			})
		})
	return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
	const posts = await getCollection('blog')
	return posts
		.filter((post) => {
			return (
				!post.data.draft &&
				post.data.tags.some((t) => toAscii(t) === toAscii(tag))
			)
		})
		.sort((a, b) => {
			const dateA = getEffectiveDate(a)
			const dateB = getEffectiveDate(b)
			return dateB.valueOf() - dateA.valueOf()
		})
}

export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts()
	return posts
		.filter((post) => !post.data.draft)
		.filter((post) => post.data.category.some(cat => toAscii(cat) === toAscii(category)))
}

