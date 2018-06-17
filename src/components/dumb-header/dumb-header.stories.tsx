import '@stencil/core';

import { storiesOf } from '@storybook/html';

const stories = storiesOf('Global/Header', module);

stories.add('Default', () => {
  return `<dumb-header></dumb-header>`;
});
