/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

import { withContainer } from '../../helpers/decorators';
import { Stack } from '.';

export default {
  component: { ...Stack, defaultDocsProps: Stack.defaultProps },
  title: 'Library|Layout/Stack',
  decorators: [withContainer],
};

const Container = styled.div`
  & > div {
    border: 5px solid red;
  }
`;

const ExampleBody = () => (
  <>
    {Array.from({ length: 3 }).map((_, i) => (
      <div
        key={i}
        style={{
          background: 'gray',
          padding: '1rem',
          borderRadius: '8px',
        }}
      >
        Box
        {i}
      </div>
    ))}
  </>
);

export const base = () => (
  <Container>
    <Stack>
      <ExampleBody />
    </Stack>
  </Container>
);

export const vertical = () => (
  <Container>
    <Stack layout="vertical">
      <ExampleBody />
    </Stack>
  </Container>
);

export const horizontal = () => (
  <Container>
    <Stack layout="horizontal">
      <ExampleBody />
    </Stack>
  </Container>
);

export const responsive = () => (
  <Container>
    <Stack layout={['horizontal', 'hidden', 'vertical']}>
      <ExampleBody />
    </Stack>
  </Container>
);
