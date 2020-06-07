/* eslint-disable prefer-destructuring */
type BreakpointsEnum = 'sm' | 'md' | 'lg' | 'xl';

type WindowSizes = number[] & { [key in BreakpointsEnum]: number };

const windowSizes = [40, 52, 64, 80] as WindowSizes;
windowSizes.sm = windowSizes[0];
windowSizes.md = windowSizes[1];
windowSizes.lg = windowSizes[2];
windowSizes.xl = windowSizes[3];

export const breakpoints = windowSizes.map(
  (bp: number) => `${bp}em`,
) as string[];

export const media = {
  above(size: BreakpointsEnum | number) {
    return `@media (min-width: ${windowSizes[size]}em)`;
  },
  below(size: BreakpointsEnum | number) {
    const idx = windowSizes.indexOf(windowSizes[size]);
    const breakpoint = windowSizes[idx - 1] || windowSizes[0];
    return `@media (max-width: ${breakpoint - 0.0625}em)`;
  },
};
