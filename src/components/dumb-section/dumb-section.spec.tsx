import { TestWindow } from '@stencil/core/testing';
import { DumbSection } from './dumb-section';

describe('dumb-section', () => {
  let element;
  let window;

  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [DumbSection],
      html: `
      <dumb-section
        section-title="Section Title"
        section-description="This is a description of what the section is">
          This is the section body, where you can put any content or include other components.
      </dumb-section>`
    });
  });

  it('should match snapshot', async () => {
    expect(element).toMatchSnapshot();
  });
});
