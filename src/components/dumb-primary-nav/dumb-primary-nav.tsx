import { Component, Prop } from '@stencil/core';

export interface PrimaryNavItem {
  href: string;
  text: string;
}

@Component({
  tag: 'dumb-primary-nav',
  styleUrl: 'dumb-primary-nav.css',
  shadow: true
})
export class DumbPrimaryNav {
  @Prop() listItems: string | PrimaryNavItem[];
  @Prop() styleModifier: string;

  render() {
    const _listItems: PrimaryNavItem[] = Array.isArray(this.listItems)
      ? this.listItems
      : JSON.parse(this.listItems);
    return (
      <nav class={`c-primary-nav ${this.styleModifier || ''}`}>
        <ul class="c-primary-nav__list">
          {_listItems.map(listItem => {
            return (
              <li class="c-primary-nav__item">
                <a href={listItem.href}>{listItem.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
