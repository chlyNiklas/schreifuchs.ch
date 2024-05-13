import plugin from "tailwindcss/plugin"
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'outfit', 'sans-serif']
      },
      textShadow: {
        sm: '0 1px 2px #000',
        DEFAULT: '0 2px 4px #000',
        lg: '0px 0px 20px #000',
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
