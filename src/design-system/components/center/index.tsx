import React, { FC } from 'react';
import styled from 'styled-components';
import { layout, space, ResponsiveValue } from 'styled-system';

import { HtmlAttrs, As } from '../../baseProps';
import { SpaceProps } from '../../theme';

export type CenterProps = {
  /** Same as setting display, flex-direction and justify-content to flex, column and center. */
  hasChildrenCentered?: boolean;
  /** Same as setting text-align to center. */
  hasTextCentered?: boolean;
  /** Same as setting max-width. */
  maxWidth?: string;
  /** Same as setting both padding-right and padding-left. */
  px?: ResponsiveValue<SpaceProps>;
  /** Html attributes. */
  htmlAttrs?: HtmlAttrs;
  /** Render as. */
  as?: As;
};

const Component: FC<CenterProps> = styled.div<CenterProps>`
  ${layout};
  ${space};

  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  ${({ hasChildrenCentered }) =>
    hasChildrenCentered
      ? `align-items: center; display: flex; flex-direction: column;`
      : ''};

  ${({ hasTextCentered }) => (hasTextCentered ? 'text-align: center' : '')};
`;

export const Center: FC<CenterProps> = ({ htmlAttrs = {}, ...rest }) => (
  <Component {...htmlAttrs} {...rest} />
);

Center.defaultProps = {
  hasChildrenCentered: false,
  hasTextCentered: false,
  maxWidth: '90rem',
  px: 'x0',
};
