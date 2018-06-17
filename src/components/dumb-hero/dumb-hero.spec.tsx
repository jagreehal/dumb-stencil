import { TestWindow } from '@stencil/core/dist/testing';
import { DumbHero } from './dumb-hero';

describe('dumb-primary-nav', () => {
  let element: HTMLElement;
  let window;

  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [DumbHero],
      html: `<dumb-hero
      hero-img-src="http://via.placeholder.com/1200x650"
      hero-img-alt="Alt Text"
      hero-title="Hero Title"
      hero-description="This is the hero description"
      >
      </dumb-hero>`
    });
  });

  it('should match snapshot', async () => {
    expect(element).toMatchSnapshot();
  });
});
