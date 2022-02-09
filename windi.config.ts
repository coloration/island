import { defineConfig } from 'windicss/helpers'
import forms from 'windicss/plugin/forms'

export default defineConfig({
  extract: {
    include: ['lib/**/*.{vue,css}']
  },
  attributify: true,
  darkMode: 'class',
  shortcuts: {
    btn: 'rounded border border-gray-300 text-gray-600 px-4 py-2 m-2 inline-block hover:shadow',
  },
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#453',
          900: '#216b6b',
        },
      },
    },
  },
  plugins: [
    forms
  ]
})