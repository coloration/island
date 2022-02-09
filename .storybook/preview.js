import 'windi.css'
import '../lib/style/index.css'
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: '@coloration/island',
  brandUrl: 'https://coloration.github.io',
  brandImage: 'https://coloration.github.io/pwa-192x192.png',
})


export const parameters = {
  docs: {
    theme
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}