module.exports = {
	head: {
		title: 'tahoiya-generator',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: 'Generate random sentence for tahoiya'},
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
		],
	},

	loading: {color: '#3B8070'},

	build: {
		extend (config) {
			config.module.rules.push({
				test: /\.bnf$/,
				loader: 'raw-loader',
			});
		},
	},

	css: [
		'element-ui/lib/theme-chalk/index.css',
	],

	plugins: [
		'@/plugins/element-ui',
	],

	router: {
		...(process.env.DEPLOY_ENV === 'GH_PAGES' ? {
			base: '/tahoiya-generator/',
		} : {}),
	},
};
