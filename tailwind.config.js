/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-gray': '#262626',
				primary: {
					light: '#338c66', // A lighter shade of the primary color
					DEFAULT: '#006633', // The default primary color
					dark: '#004d26', // A darker shade of the primary color
				},
			},
		},
	},
	plugins: [
		function ({ addBase, theme }) {
			addBase({
				body: {
					color: theme('colors.custom-gray'),
				},
			});
		},
	],
};

