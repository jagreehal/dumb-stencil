import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-card-list',
  styleUrl: 'dumb-card-list.css',
  shadow: true
})
export class DumbCardList {
  @Prop() listItems: string;

  render() {
    const _listItems: any[] = JSON.parse(this.listItems);
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
