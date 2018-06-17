import '@stencil/core';

import { storiesOf } from '@storybook/html';

const stories = storiesOf('Global/Logo', module);

stories.add('Default', () => {
  return `<dumb-logo
      href="http://bradfrost.com"
      src="http://via.placeholder.com/120x60"
      alt="Company Name" />`;
});
