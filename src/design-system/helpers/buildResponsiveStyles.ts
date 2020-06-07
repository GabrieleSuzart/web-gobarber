import { CSSObject } from 'styled-components';
import { Theme } from '../theme';

/**
 * Based on https://styled-system.com/responsive-styles.
 * The `styled-system` responsive styles on works with simple css props.
 * This helper receives complex css objects in an array and applies in the theme breakpoints
 * @param styles The array of cssObject based on the `Theme` breakpoints
 * @param theme The design-system `Theme`
 * @example
 * buildResponsiveStyles([{
 *  display: 'none', // mobile
 * }, {
 *  display: 'flex', // tablet
 *  alignItems: 'center'
 * }])
 */

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const buildResponsiveStyles = (styles: CSSObject[], theme: Theme) =>
  styles.reduce((cssObject, cssProps, i) => {
    if (i === 0) {
      return {
        ...cssObject,
        ...cssProps,
      };
    }
    return {
      ...cssObject,
      [theme.media.above(i - 1)]: cssProps,
    };
  }, {});
