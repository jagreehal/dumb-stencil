import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-section',
  styleUrl: 'dumb-section.css',
  shadow: true
})
export class DumbSection {
  @Prop() sectionTitle: string;
  @Prop() sectionDescription: string;

  render() {
    return (
      <section class="c-section">
        <header class="c-section__header">
          <h2 class="c-section__title">{this.sectionTitle}</h2>
          <p class="c-section__description">{this.sectionDescription}</p>
        </header>
        <div class="c-section__body">
          <slot />
        </div>
      </section>
    );
  }
}
