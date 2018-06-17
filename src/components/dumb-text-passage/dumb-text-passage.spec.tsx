import { TestWindow } from '@stencil/core/testing';
import { DumbTextPassage } from './dumb-text-passage';

describe('dumb-text-passage', () => {
  let element;
  let window;

  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [DumbTextPassage],
      html:  `
      <dumb-text-passage>
        <p>A text passage contains arbitrary text that might come from a CMS. It should live within a container that caps the line length of the text to avoid a straining reading experience.</p>      
      </dumb-text-passage>`
    });
  });

  it('should match snapshot', async () => {
    expect(element).toMatchSnapshot();
  });
});
