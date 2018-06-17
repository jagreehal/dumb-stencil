import { TestWindow } from '@stencil/core/testing';
import { DumbHeader } from './dumb-header';

describe('dumb-header', () => {
  let element;
  let window;
  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [DumbHeader],
      html: `<dumb-header></dumb-header>`
    });
  });

  it('should match snapshot', async () => {
    expect(element).toMatchSnapshot();
  });
});
