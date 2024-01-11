//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	},
	vitePlugin: {
		inspector: true
	}
};

export default config;
