/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC } from 'react';
import * as CSS from 'csstype';
import styled, { CSSObject } from 'styled-components';
import { alignItems, ResponsiveValue } from 'styled-system';

import { SpaceProps } from '../../theme';
import { HtmlAttrs, As } from '../../baseProps';
import { toArray } from '../../helpers/toArray';
import { buildResponsiveStyles } from '../../helpers/buildResponsiveStyles';

type Layout = 'vertical' | 'horizontal' | 'hidden';

export type StackProps = {
  /** The stack layout. */
  layout?: Layout | Layout[];
  /** Same as setting margin-top. */
  margin?: SpaceProps;
  /** Same as setting align-items. */
  alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
  /** Html attributes. */
  htmlAttrs?: HtmlAttrs;
  /** Render as */
  as?: As;
  /** Html element onClick */
  onClick?: () => void;
};

const Component = styled.div<StackProps>(
  {
    '& > *': {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  ({ layout, margin, theme }) => {
    const styles = toArray(layout).map<CSSObject>(layoutItem => {
      if (layoutItem === 'hidden') {
        return {
          display: 'none',
        };
      }

      if (layoutItem === 'horizontal') {
        return {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          '& > * + *': {
            marginTop: 0,
            marginLeft: theme.space[margin!],
          },
        };
      }

      return {
        display: 'block',
        '& > * + *': {
          marginLeft: 0,
          marginTop: theme.space[margin!],
        },
      };
    });
    return buildResponsiveStyles(styles, theme);
  },
  alignItems,
);

export const Stack: FC<StackProps> = ({ htmlAttrs = {}, ...rest }) => {
  return <Component {...htmlAttrs} {...rest} />;
};

Stack.defaultProps = {
  layout: 'vertical',
  margin: 'x2',
};
