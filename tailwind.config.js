/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/src/assets/bg.mp4')",
			},
			animation: {
				fadeIn: "fadeIn .5s ease-in forwards",
				fadeOut: "fadeOut .5s ease-out forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
