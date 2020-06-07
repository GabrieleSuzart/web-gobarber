/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
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
    border: 5px solid #333;
  }
`;

const ExampleBody: FC = () => (
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

export const base: FC = () => (
  <Container>
    <Stack>
      <ExampleBody />
    </Stack>
  </Container>
);

export const vertical: FC = () => (
  <Container>
    <Stack layout="vertical">
      <ExampleBody />
    </Stack>
  </Container>
);

export const horizontal: FC = () => (
  <Container>
    <Stack layout="horizontal">
      <ExampleBody />
    </Stack>
  </Container>
);

export const responsive: FC = () => (
  <Container>
    <Stack layout={['horizontal', 'hidden', 'vertical']}>
      <ExampleBody />
    </Stack>
  </Container>
);
