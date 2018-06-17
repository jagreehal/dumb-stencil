import '@stencil/core';

import {
  storiesOf
} from '@storybook/html';

import {
  text,
  boolean,
  withKnobs,
} from '@storybook/addon-knobs';


const stories = storiesOf('Buttons/Button', module);

stories.addDecorator(withKnobs)
stories.add('Default', () => {
  return (
    `<dumb-button ${boolean('Disabled', false) ? 'disabled' : ''} text="${text('Button Text', 'Button')}"></<dumb-button>`
  )
});

stories.add('Secondary', () => {
  return (
    `<dumb-button class="secondary" ${boolean('Disabled', false) ? 'disabled' : ''}  text="${text('Button Text', 'Button')}"></<dumb-button>`
  )
});
