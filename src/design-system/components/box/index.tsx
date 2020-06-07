import React, { FC } from 'react';
import styled from 'styled-components';
import {
  border,
  color,
  shadow,
  space,
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  justifyContent,
  JustifyContentProps,
  LayoutProps,
  layout,
} from 'styled-system';

import { HtmlAttrs, As } from '../../baseProps';
import { ColorProps, ShadowProps, SpaceProps } from '../../theme';

type BorderStyleProps =
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'hidden'
  | 'inset'
  | 'none'
  | 'outset'
  | 'ridge'
  | 'solid';

export type BoxProps = AlignItemsProps &
  AlignSelfProps &
  JustifyContentProps &
  LayoutProps & {
    /** Same as setting border-bottom-width. */
    borderBottomWidth?: number | number[];
    /** Same as setting border-color. */
    borderColor?: ColorProps | ColorProps[];
    /** Same as setting border-left-width. */
    borderLeftWidth?: number | number[];
    /** Same as setting border-right-width. */
    borderRightWidth?: number | number[];
    /** Same as setting border-style. */
    borderStyle?: BorderStyleProps | BorderStyleProps[];
    /** Same as setting border-top-width. */
    borderTopWidth?: number | number[];
    /** Same as setting border-width. */
    borderWidth?: number | number[];
    /** Same as setting box-shadow. */
    boxShadow?: ShadowProps | ShadowProps[];
    /** If true, border-radius is set to 8px. */
    hasRoundedCorner?: boolean;
    /** Same as setting padding. */
    padding?: SpaceProps | SpaceProps[];
    /** Same as setting padding-bottom. */
    paddingBottom?: SpaceProps | SpaceProps[];
    /** Same as setting padding-left. */
    paddingLeft?: SpaceProps | SpaceProps[];
    /** Same as setting padding-right. */
    paddingRight?: SpaceProps | SpaceProps[];
    /** Same as setting padding-top. */
    paddingTop?: SpaceProps | SpaceProps[];
    /** Same as setting both padding-right and padding-left. */
    px?: SpaceProps | SpaceProps[];
    /** Same as setting both padding-top and padding-bottom. */
    py?: SpaceProps | SpaceProps[];
    /** Same as setting margin-bottom. */
    marginBottom?: SpaceProps | SpaceProps[];
    /** Same as setting margin-left. */
    marginLeft?: SpaceProps | SpaceProps[];
    /** Same as setting margin-right. */
    marginRight?: SpaceProps | SpaceProps[];
    /** Same as setting margin-top. */
    marginTop?: SpaceProps | SpaceProps[];
    /** Html attributes. */
    htmlAttrs?: HtmlAttrs;
    /** Render as. */
    as?: As;
    /** Html element onClick. */
    onClick?: () => void;
    /** Html element onMouseOver. */
    onMouseOver?: () => void;
    /** Html element onFocus. */
    onFocus?: () => void;
  };

const Component: FC<BoxProps> = styled.div<BoxProps>`
  ${border}
  ${color}
  ${shadow}
  ${space}
  ${alignItems}
  ${alignSelf}
  ${justifyContent}
  ${layout}

  ${({ hasRoundedCorner }) => (hasRoundedCorner ? 'border-radius: 8px' : '')};
`;

export const Box: FC<BoxProps> = ({ htmlAttrs = {}, ...rest }) => (
  <Component {...htmlAttrs} {...rest} />
);

Box.defaultProps = {
  boxShadow: 'x0',
  hasRoundedCorner: false,
};
