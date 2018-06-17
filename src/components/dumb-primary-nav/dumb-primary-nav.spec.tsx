import { TestWindow } from '@stencil/core/dist/testing';
import { DumbPrimaryNav } from './dumb-primary-nav';

describe('dumb-primary-nav', () => {
  let element: HTMLElement;
  let window;
  const listItems = [
    {
      "href": "#",
      "text": "Nav Item 1"
    },
    {
      "href": "#",
      "text": "Nav Item 2"
    },
    {
      "href": "#",
      "text": "Nav Item 3"
    },
    {
      "href": "#",
      "text": "Nav Item 4"
    }
  ];

  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [DumbPrimaryNav],
      html: `<dumb-primary-nav list-items='${JSON.stringify(listItems)}'></dumb-primary-nav>`
    });
  });

  it('should render four list elements', async () => {
    expect(element.querySelectorAll('li').length).toBe(4);
  });

  it('should match snapshot', async () => {
    expect(element).toMatchSnapshot();
  });
});
