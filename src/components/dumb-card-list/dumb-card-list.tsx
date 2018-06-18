import { Component, Prop } from '@stencil/core';

export interface CardListItem {
  description: string;
  theme?: string;
  title: string
}

@Component({
  tag: 'dumb-card-list',
  styleUrl: 'dumb-card-list.css',
  shadow: true
})
export class DumbCardList {
  @Prop() listItems: string | CardListItem[];

  render() {
    const _listItems: CardListItem[] = Array.isArray(this.listItems)
      ? this.listItems
      : JSON.parse(this.listItems);
    return (
      <ul class="c-card-list">
        {_listItems.map((listItem) => {
          return (
            <dumb-card
              class={listItem.theme}
              card-title={listItem.title}
              card-description={listItem.description}
            />
          );
        })}
      </ul>
    );
  }
}
