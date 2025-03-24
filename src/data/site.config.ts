interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://simail.si/', // Write here your website url
	author: 'simail', // Site author
	title: 'simail', // Site title.
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.', // Description to display in the meta tags
	lang: 'sl-SI',
	ogLocale: 'sl_SI',
	shareMessage: 'Deli to objavo', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
