import { create, Rest } from '@storybook/theming'

export const theme = create({
  base: 'dark',
  brandTitle: '@coloration/island',
  brandUrl: 'https://coloration.github.io',
  // brandImage: 'https://coloration.github.io/pwa-192x192.png',

  colorPrimary: '#6366f1',
  colorSecondary: '#6366f1',

  // // UI
  appBg: '#1E293B',
  appContentBg: '#1E293B',
  // appBorderColor: 'grey',
  appBorderRadius: 0,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  textColor: '#f3f4f6',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  barTextColor: '#f3f4f6',
  barSelectedColor: '#6366f1',
  barBg: '#1f2937',

  // // Form colors
  // inputBg: '#e5e7eb',
  // inputBorder: 'silver',
  // inputTextColor: '#f3f4f6',
  // inputBorderRadius: 0,
})


// export interface ThemeVars {
//   base: 'light' | 'dark';
//   colorPrimary?: string;
//   colorSecondary?: string;
//   appBg?: string;
//   appContentBg?: string;
//   appBorderColor?: string;
//   appBorderRadius?: number;
//   fontBase?: string;
//   fontCode?: string;
//   textColor?: string;
//   textInverseColor?: string;
//   textMutedColor?: string;
//   barTextColor?: string;
//   barSelectedColor?: string;
//   barBg?: string;
//   inputBg?: string;
//   inputBorder?: string;
//   inputTextColor?: string;
//   inputBorderRadius?: number;
//   brandTitle?: string;
//   brandUrl?: string;
//   brandImage?: string;
//   gridCellSize?: number;
// }