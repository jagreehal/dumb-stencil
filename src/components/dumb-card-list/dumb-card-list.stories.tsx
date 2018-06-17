import '@stencil/core';

import {
  storiesOf
} from '@storybook/html';

import {
  array,
  withKnobs,
} from '@storybook/addon-knobs';


const stories = storiesOf('Lists & Collections/CardList', module);

stories.addDecorator(withKnobs)

stories.add('Default', () => {
  const list = array("List Items", [
    {
      "title": "Squeeze Its",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "title": "Card Title",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "title": "Hugs",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "href": "http://google.com",
      "title": "Mondo",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ]);

  return (
    `<dumb-card-list list-items='${JSON.stringify(list)}'>
    </dumb-card-list>`
  )
});
