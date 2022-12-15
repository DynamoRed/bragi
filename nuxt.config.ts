// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: `Bragi | DynamoRed's URL Shortener`,
			htmlAttrs: {
				lang: 'fr'
			},
			meta: [
				{ charset: 'utf-8' },
				{ "http-equiv": 'description', name: 'description', content: `DynamoRed's URL Shortener` },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: `DynamoRed's URL Shortener` },
				{ name: 'format-detection', content: 'telephone=no' },
			],
			link: [
				{ rel: 'icon', type: 'image/png', href: '/icon.png' }
			]
		}
	}
})
