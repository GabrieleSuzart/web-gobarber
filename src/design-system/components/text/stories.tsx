import React, { FC } from 'react';

import { Text, theme } from '../..';
import { TextProps } from '.';
import { withContainer } from '../../helpers/decorators';

const defaultDocsProps = {
  color: 'inherit',
  isBold: false,
  isBrand: false,
  textAlign: 'left',
  textSize: 'x2',
};

export default {
  component: { ...Text, defaultDocsProps },
  title: 'Library|Typography/Text',
  decorators: [withContainer],
};

export const base: FC = () => (
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
    sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
    adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Text>
);

export const sizes: FC = () => {
  const fontSizes = Object.keys(theme.fontSizes).reverse();

  return (
    <div>
      {fontSizes.map(size => (
        <Text key={size} isBrand textSize={size as TextProps['textSize']}>
          {`${size} - With brand font`}
        </Text>
      ))}
      <br />
      {fontSizes.map(size => (
        <Text key={size} textSize={size as TextProps['textSize']}>
          {`${size} - With main font`}
        </Text>
      ))}
    </div>
  );
};

export const bold: FC = () => <Text isBold>This is a bold text</Text>;
