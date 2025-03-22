import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export function remarkReadingTime() {
	return function (tree: unknown, { data }: any) {
		const textOnPage = toString(tree)
		const readingTime = getReadingTime(textOnPage)
		const minutes = Math.ceil(readingTime.minutes)
		// Format in Slovene: "Čas branja X min"
		data.astro.frontmatter.minutesRead = `Čas branja ${minutes} min`
	}
}
