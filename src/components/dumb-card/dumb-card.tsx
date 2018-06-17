import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-card',
  styleUrl: 'dumb-card.css',
  shadow: true
})
export class DumbCard {
  @Prop() cardTitle: string;
  @Prop() cardDescription: string;

  render() {
    return (
      <div class="c-card">
        <header class="c-card__header">
          <h3 class="c-card__title">{this.cardTitle}</h3>
          <p class="c-card__description">
            {this.cardDescription}
          </p>
        </header>
        <div class="c-card__body">
          <slot />
        </div>
      </div>
    );
  }
}
