import React, { FC } from 'react';
import styled from 'styled-components';
import { display, DisplayProps, grid } from 'styled-system';

import { HtmlAttrs, As } from '../../baseProps';
import { SpaceProps } from '../../theme';

export type GridProps = DisplayProps & {
  gridArea?: string | string[];
  gridAutoColumns?: string | string[];
  gridAutoFlow?: string | string[];
  gridAutoRows?: string | string[];
  gridColumn?: string | string[];
  gridColumnGap?: SpaceProps | SpaceProps[];
  gridGap?: SpaceProps | SpaceProps[];
  gridRow?: string | string[];
  gridRowGap?: SpaceProps | SpaceProps[];
  gridTemplateColumns?: string | string[];
  gridTemplateAreas?: string | string[];
  gridTemplateRows?: string | string[];
  htmlAttrs?: HtmlAttrs;
  as?: As;
  onMouseOver?: () => void;
  onFocus?: () => void;
};

const Component: FC<GridProps> = styled.div<GridProps>`
  display: grid;

  ${display};
  ${grid};
`;

export const Grid: FC<GridProps> = ({ htmlAttrs = {}, ...rest }) => (
  <Component {...htmlAttrs} {...rest} />
);

Grid.defaultProps = {
  gridGap: 'x1',
};
