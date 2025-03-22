import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'
import { remarkAds } from './src/utils/remarkAds.ts'
import { siteConfig } from './src/data/site.config'
import compress from '@playform/compress'

// https://astro.build/config
export default defineConfig({
	site: siteConfig.site,
	markdown: {
		remarkPlugins: [remarkReadingTime, remarkAds],
		publishDraft: true,
		shikiConfig: {
			themes: {
				default: 'material-theme-palenight'
			},
			wrap: true
		}
	},
	integrations: [
		mdx({
			shikiConfig: {
				themes: {
					light: 'vitesse-light',
					dark: 'material-theme-palenight',
				},
				wrap: true
			},
			publishDraft: true
		}),
		sitemap(),
		tailwind(),
		compress({
			CSS: true,
			HTML: {
				removeAttributeQuotes: false,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
				minifyCSS: true,
				minifyJS: true,
				sortAttributes: true,
				sortClassName: true,
			},
			Image: {
				quality: 80,
				avif: false,
			},
			JavaScript: true,
			SVG: true,
		}),
	]
})
