import React, { FC } from 'react';

import { Box, Center, Stack, Text } from '../..';
import { withContainer } from '../../helpers/decorators';

const defaultDocsProps = {
  borderBottomWidth: 'x0',
  borderColor: 'currentColor',
  borderLeftWidth: 'x0',
  borderRightWidth: 'x0',
  borderStyle: 'solid',
  borderTopWidth: 'x0',
  borderWidth: 0,
  boxShadow: 'x0',
  hasRoundedCorner: false,
  padding: 'x2',
  paddingBottom: 'x0',
  paddingLeft: 'x0',
  paddingRight: 'x0',
  paddingTop: 'x0',
  px: 'x0',
  py: 'x0',
};

export default {
  component: { ...Box, defaultDocsProps },
  title: 'Library|Layout/Box',
  decorators: [withContainer],
};

export const base: FC = () => (
  <Box>
    <Center>
      <Stack>
        <Text as="h1" isBrand textSize="x6">
          The Box
        </Text>
      </Stack>
    </Center>
  </Box>
);
