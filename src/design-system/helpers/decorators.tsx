import React, { FC, ComponentType } from 'react';
import { Box } from '../components/box';

/**
 * Adds a padding in storybook stories
 */
export const withContainer: FC<ComponentType> = Story => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      htmlAttrs={{
        style: {
          minHeight: '100vh',
        },
      }}
    >
      <Story />
    </Box>
  );
};
