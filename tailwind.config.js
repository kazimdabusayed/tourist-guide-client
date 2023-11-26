/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/preline/dist/*.js",
	],
	plugins: [require("preline/plugin")],
	theme: {
		extend: {
			fontFamily: {
				poppins: "Poppins, sans-serif",
			},
		},
	},
};
