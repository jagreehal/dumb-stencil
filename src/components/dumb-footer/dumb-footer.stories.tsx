import '@stencil/core';

import {
  storiesOf
} from '@storybook/html';

const stories = storiesOf('Global/Footer', module);

stories.add('Default', () => {
  return (
    `<dumb-footer company-name="Company Name">Hello Footer</dumb-footer>`
  )
});
