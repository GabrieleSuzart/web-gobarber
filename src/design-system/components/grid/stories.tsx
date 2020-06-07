import React, { FC } from 'react';

import { Box, Center, Grid, Stack, Text } from '../..';
import { withContainer } from '../../helpers/decorators';

const defaultDocsProps = {
  gridAutoColumns: '',
  gridAutoFlow: '',
  gridAutoRows: '',
  gridColumnGap: 'x0',
  gridGap: 'x1',
  gridRowGap: 'x0',
  gridTemplateColumns: '',
  gridTemplateAreas: '',
  gridTemplateRows: '',
};

export default {
  component: { ...Grid, defaultDocsProps },
  title: 'Library|Layout/Grid',
  decorators: [withContainer],
};

export const base: FC = () => (
  <Box htmlAttrs={{ style: { width: '500px' } }}>
    <Center>
      <Stack>
        <Text as="h1" isBrand textSize="x6">
          The Grid
        </Text>

        <Grid gridTemplateColumns="repeat(12, 1fr)">
          <Grid gridColumn="1 / 2">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              1
            </Text>
          </Grid>
          <Grid gridColumn="2 / 3">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              2
            </Text>
          </Grid>
          <Grid gridColumn="3 / 4">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              3
            </Text>
          </Grid>
          <Grid gridColumn="4 / 5">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              4
            </Text>
          </Grid>
          <Grid gridColumn="6 / 7">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              6
            </Text>
          </Grid>
          <Grid gridColumn="7 / 8">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              7
            </Text>
          </Grid>
          <Grid gridColumn="8 / 9">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              8
            </Text>
          </Grid>
          <Grid gridColumn="9 / 10">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              9
            </Text>
          </Grid>
          <Grid gridColumn="10 / 11">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              10
            </Text>
          </Grid>
          <Grid gridColumn="11 / 12">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              11
            </Text>
          </Grid>
          <Grid gridColumn="12 / 13">
            <Text
              textAlign="center"
              htmlAttrs={{ style: { border: '1px solid red' } }}
            >
              12
            </Text>
          </Grid>
        </Grid>
      </Stack>
    </Center>
  </Box>
);
