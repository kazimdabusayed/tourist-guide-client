/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				poppins: "Poppins, sans-serif",
			},
		},
	},
};
