import { Component, Prop } from '@stencil/core';
import { PrimaryNavItem } from '../dumb-primary-nav/dumb-primary-nav';

const listItems: PrimaryNavItem[] = [
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
@Component({
  tag: 'dumb-header',
  styleUrl: 'dumb-header.css',
  shadow: true
})
export class DumbHeader {
  @Prop() companyName: string;
  @Prop() listItems: string;

  render() {
    return (
      <header class="c-header">
        <dumb-logo
          href="#"
          src="http://via.placeholder.com/120x60"
          alt={this.companyName}
        />
        <dumb-primary-nav listItems={listItems} />
        <dumb-inline-form
          method="post"
          action="#"
          placeholder="Search this site"
          cta="Search"
          id="search-form"
          label="Search the site"
        />
      </header>
    );
  }
}
