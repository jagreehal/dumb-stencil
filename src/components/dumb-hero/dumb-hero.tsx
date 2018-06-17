import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-hero',
  styleUrl: 'dumb-hero.css',
  shadow: true
})
export class DumbHero {
  @Prop() heroDescription: string;
  @Prop() heroImgAlt: string;
  @Prop() heroImgSrc: string;
  @Prop() heroTitle: string;

  render() {
    return (
      <div class="c-hero">
        <img class="c-hero__img" src={this.heroImgSrc} alt={this.heroImgAlt} />
        <div class="c-hero__body">
          <h2 class="c-hero__title">{this.heroTitle}</h2>
          <p class="c-hero__description">{this.heroDescription}</p>
        </div>
      </div>
    );
  }
}
