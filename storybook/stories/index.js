import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../../src/components/atoms/Text';

storiesOf('Atoms', module)
  .add('Text title', () => (
    <Text
      as="h1"
      color="white"
      size="xxxl"
      trasnform="uppercase"
      align="center"
      family="primary"
    >
      SHARE YOUR <br />
      HOLIDAY DREAM
    </Text>
  ))
  .add('Text subtitle', () => (
    <Text
      color="white"
      size="xl"
      family="primary"
    >
      How Dreamshare works?
    </Text>
  ))
  .add('Text large paragraph', () => (
    <Text
      color="white"
      size="xxl"
      family="secondary"
    >
      And find the perfect partner to fullfill it
    </Text>
  ))
  .add('Text small paragraph', () => (
    <Text
      color="white"
      size="s"
      family="secondary"
    >
      Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.
    </Text>
  ))
  .add('Text Brand', () => (
    <Text
      color="white"
      size="l"
      transform="uppercase"
      family="primary"
    >
      DREAMSHARE
    </Text>
  ));
