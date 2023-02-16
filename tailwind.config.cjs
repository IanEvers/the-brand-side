/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"Georgia": ["Georgia"],
				"Inter": ["Inter"]
			},
			animation: {
        'desaparecer': 'desaparecer 5s linear ',
				'fadeIn': "fadeIn 1s ease-in forwards",
				'fadeOut': "fadeOut 1s ease-in forwards"
      },
			keyframes: {
        desaparecer: {
          '0%, 100%': { transform: 'scale(1)' },
          '20%, 80%': { transform: 'scale(0)' },
        },
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 }
				}
      }
		},
	},
	plugins: [],
}
