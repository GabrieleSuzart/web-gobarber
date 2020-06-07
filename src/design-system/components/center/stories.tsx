import React, { FC } from 'react';

import { Box, Center, Stack, Text } from '../..';
import { withContainer } from '../../helpers/decorators';

const defaultDocsProps = {
  hasChildrenCentered: false,
  hasTextCentered: false,
  maxWidth: '90rem',
  px: 'x0',
};

export default {
  component: { ...Center, defaultDocsProps },
  title: 'Library|Layout/Center',
  decorators: [withContainer],
};

export const base: FC = () => (
  <Box>
    <Center>
      <Stack>
        <Text as="h1" isBrand textSize="x6">
          The Center
        </Text>
      </Stack>
    </Center>
  </Box>
);
