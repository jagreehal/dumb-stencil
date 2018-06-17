import { TestWindow } from '@stencil/core/testing';
import { DumbLogo } from './dumb-logo';

describe('dumb-logo', () => {
  let element;
  let window;

  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [DumbLogo],
      html: '<dumb-logo></dumb-logo>'
    });
  });

  it('should match snapshot', async () => {
    expect(element).toMatchSnapshot();
  });
});
