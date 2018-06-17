import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-logo',
  styleUrl: 'dumb-logo.css',
  shadow: true
})
export class DumbLogo {
  @Prop() alt: string;
  @Prop() href: string;
  @Prop() src: string;

  render() {
    return (
      <a href={this.href} class="c-logo" rel="home">
        <img class="c-logo__img" src={this.src} alt={this.alt} />
      </a>
    );
  }
}
