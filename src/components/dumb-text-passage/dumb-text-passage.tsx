import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-text-passage',
  styleUrl: 'dumb-text-passage.css',
  shadow: true
})
export class DumbTextPassage {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div class="c-text-passage">
        <slot/>
      </div>
    );
  }
}
