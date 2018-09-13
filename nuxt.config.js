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
		extend (config, {isDev, isClient}) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
	},
};
