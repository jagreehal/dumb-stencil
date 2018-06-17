import '@stencil/core';

import {
  storiesOf
} from '@storybook/html';

import {
  text,
  select,
  withKnobs,
} from '@storybook/addon-knobs';


const stories = storiesOf('Blocks/Card', module);

stories.addDecorator(withKnobs)

stories.add('Default', () => {
  return (
    `<dumb-card class="${select('theme', { none: '', "dark": 'dark' })}" card-title="${text('Title', 'Card Title')}" card-description="${text('Description', 'This is the card description')}">
      This is the card body.
    </dumb-card>`
  )
});


stories.add('Dark', () => {
  return (
    `<dumb-card class="dark" card-title="${text('Title', 'Card Title')}" card-description="${text('Description', 'This is the card description')}">
      This is the card body.
    </dumb-card>`
  )
});

