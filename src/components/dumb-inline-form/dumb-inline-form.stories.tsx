import '@stencil/core';

import { storiesOf } from '@storybook/html';

const stories = storiesOf('Forms/InlineForm', module);

stories.add('Default', () => {
  return `<dumb-inline-form
    method="post"
    action="http://bradfrost.com"
    placeholder="Placeholder"
    cta="Action">
    </dumb-inline-form>`;
});
