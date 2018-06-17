import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-button',
  styleUrl: 'dumb-button.css',
  shadow: true
})

export class DumbButton {
  @Element() el: HTMLElement;
  @Event() clicked: EventEmitter;
  @Prop() disabled: boolean = false;
  @Prop() text: string;

  handleClick = () => {
    this.clicked.emit();
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.disabled}>
        {this.text}
      </button>
    );
  }
}
