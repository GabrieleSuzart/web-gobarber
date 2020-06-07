import React, { FC } from 'react';
import styled from 'styled-components';
import { color, typography, variant } from 'styled-system';

import { HtmlAttrs, As } from '../../baseProps';
import { ColorProps, TextSizeProps } from '../../theme';

type TextAlignProps = 'center' | 'justify' | 'justify-all' | 'left' | 'right';
type TextTransformProps =
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'none'
  | 'full-width'
  | 'inherit'
  | 'initial'
  | 'unset';

export type TextProps = {
  /** Same as setting color. */
  color?: ColorProps;
  /** If true, font-weight is set to bold. */
  isBold?: boolean;
  /** If true, font-family is set to Amsi Pro. */
  isBrand?: boolean;
  /** If true, text-decoration is set to underline. */
  isUnderlined?: boolean;
  /** CSS text-transform. */
  textTransform?: TextTransformProps;
  /** Same as setting text-align. */
  textAlign?: TextAlignProps | TextAlignProps[];
  /** Same as setting both font-size and line-height. */
  textSize?: TextSizeProps | TextSizeProps[];
  /** Html attributes. */
  htmlAttrs?: HtmlAttrs;
  /** Render as */
  as?: As;
  /** Html element id */
  id?: string;
  /** Html element onClick */
  onClick?: () => void;
};

const Component = styled.p<TextProps>`
  ${color};
  ${typography};
  ${variant({
    prop: 'textSize',
    scale: 'textSizes',
  })};

  & > * {
    font-size: inherit;
    line-height: 0 !important;
  }

  ${({ isBold, theme }) =>
    isBold ? `font-weight: ${theme.fontWeights.bold}` : ''};

  ${({ isBrand, theme }) =>
    isBrand ? `font-family: ${theme.fonts.brand}` : ''};

  ${({ isUnderlined }) => (isUnderlined ? 'text-decoration: underline' : '')};

  ${({ textTransform }) =>
    textTransform ? `text-transform: ${textTransform}` : ''};
`;

export const Text: FC<TextProps> = ({ htmlAttrs = {}, ...rest }) => (
  <Component {...htmlAttrs} {...rest} />
);

Text.defaultProps = {
  color: 'inherit',
  isBold: false,
  isBrand: false,
  isUnderlined: false,
  textAlign: 'left',
  textSize: 'x2',
};
