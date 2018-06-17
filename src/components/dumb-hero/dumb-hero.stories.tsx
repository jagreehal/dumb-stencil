import '@stencil/core';

import {
  storiesOf
} from '@storybook/html';

const stories = storiesOf('Blocks/Hero', module);

stories.add('Default', () => {


  return (
    `<dumb-hero
    hero-img-src="http://via.placeholder.com/1200x650"
    hero-img-alt="Alt Text"
    hero-title="Hero Title"
    hero-description="This is the hero description"
    >
    </dumb-hero>`
  )
});
