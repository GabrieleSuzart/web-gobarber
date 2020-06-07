import { DefaultTheme } from 'styled-components';

import { media, breakpoints } from './media';

const fallbackFontStack =
  '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const colors = {
  black: '#000000',
  smoke: '#f6f6f6',
  white: '#ffffff',

  currentColor: 'currentColor',
  inherit: 'inherit',
  transparent: 'transparent',

  gray: '#666360',
  muted: '#eeeeee',

  dark: '#232129',
  lightDark: '#312e38',
  orange: '#ff9000',
  dawnPink: '#F4EDE8',
};

const fonts = {
  body: `"Roboto Slab", ${fallbackFontStack}`,
  brand: `"Roboto Slab", "Roboto Slab", ${fallbackFontStack}`,
};

const fontSizes = {
  /** 12px */
  x1: '0.750rem',
  /** 16px */
  x2: '1.000rem',
  /** 24px */
  x3: '1.500rem',
  /** 32px */
  x4: '2.000rem',
  /** 40px */
  x5: '2.500rem',
  /** 48px */
  x6: '3.000rem',
};

const fontWeights = {
  bold: 700,
  semibold: 500,
  normal: 400,
};

const lineHeights = {
  /** 16px */
  x1: '1.000rem',
  /** 24px */
  x2: '1.500rem',
  /** 32px */
  x3: '2.000rem',
  /** 40px */
  x4: '2.500rem',
  /** 48px */
  x5: '3.000rem',
  /** 56px */
  x6: '3.500rem',
};

const shadows = {
  /** 0% */
  x0: 'none',
  /** 16% opacity */
  x1: '0 0 8px 0 rgba(0, 0, 0, 0.16)',
  /** 24% opacity */
  x2: '0 0 8px 0 rgba(0, 0, 0, 0.24)',
};

const space = {
  /** 0px */
  x0: '0.000rem',
  /** 8px */
  x1: '0.500rem',
  /** 16px */
  x2: '1.000rem',
  /** 24px */
  x3: '1.500rem',
  /** 32px */
  x4: '2.000rem',
  /** 40px */
  x5: '2.500rem',
  /** 64px */
  x6: '4.000rem',
  /** 128px */
  x7: '8.000rem',
  /** 256px */
  x8: '16.000rem',
  /** 8px */
  gutter: '0.500rem',
};

const textSizes = {
  x1: {
    fontSize: fontSizes.x1,
    lineHeight: lineHeights.x1,
  },
  x2: {
    fontSize: fontSizes.x2,
    lineHeight: lineHeights.x2,
  },
  x3: {
    fontSize: fontSizes.x3,
    lineHeight: lineHeights.x3,
  },
  x4: {
    fontSize: fontSizes.x4,
    lineHeight: lineHeights.x4,
  },
  x5: {
    fontSize: fontSizes.x5,
    lineHeight: lineHeights.x5,
  },
  x6: {
    fontSize: fontSizes.x6,
    lineHeight: lineHeights.x6,
  },
};

export type ColorProps = keyof typeof colors;
export type FontProps = keyof typeof fonts;
export type FontSizeProps = keyof typeof fontSizes;
export type FontWeightProps = keyof typeof fontWeights;
export type LineHeightProps = keyof typeof lineHeights;
export type ShadowProps = keyof typeof shadows;
export type SpaceProps = keyof typeof space;
export type TextSizeProps = keyof typeof textSizes;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    lineHeights: typeof lineHeights;
    shadows: typeof shadows;
    space: typeof space;
    textSizes: typeof textSizes;
    breakpoints: typeof breakpoints;
    media: typeof media;
  }
}

export const theme: DefaultTheme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  space,
  textSizes,
  breakpoints,
  media,
};

export type Theme = typeof theme;
