import '@stencil/core';

import { storiesOf } from '@storybook/html';

const stories = storiesOf('Navigation/PrimaryNav', module);

stories.add('Default', () => {
  const listItems = [
    {
      href: '#',
      text: 'Nav Item 1'
    },
    {
      href: '#',
      text: 'Nav Item 2'
    },
    {
      href: '#',
      text: 'Nav Item 3'
    },
    {
      href: '#',
      text: 'Nav Item 4'
    }
  ];

  return `<dumb-primary-nav list-items='${JSON.stringify(listItems)}'>
    </dumb-primary-nav>`;
});
