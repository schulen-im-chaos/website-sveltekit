/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	safelist: [
		{
			pattern: /^(from|via|to)-.*-[456]00$/
		}
	],

	theme: {
		extend: {},
		fontSize: {
			tn: "12px",
			sm: "16px",
			base: "20px",
			medium: "20px",
			lg: "24px",
			xl: "28px",
			"2xl": "30px",
			"3xl": "32xl"
		}
	},

	darkMode: "media",

	plugins: []
};
