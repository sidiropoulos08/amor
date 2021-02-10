const colors = require('tailwindcss/colors')

module.exports = {

	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: 'class',

	theme: {

		colors: {

      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
			warmGray: colors.warmGray,
			green: colors.green,
			teal: colors.teal,
			pink: colors.pink,
			indigo: colors.indigo,
			purple: colors.purple,
			red: colors.red
			
		},
		
		extend: {},
	
	},

	variants: {
		extend: {},
	},

	plugins: [],

}
