import '@stencil/core';

import { storiesOf } from '@storybook/html';

const stories = storiesOf('Containers/Section', module);

stories.add('Default', () => {
  return `<dumb-section
  section-title="Section Title"
  section-description="This is a description of what the section is">
    This is the section body, where you can put any content or include other components.
  </dumb-section>`;
});
