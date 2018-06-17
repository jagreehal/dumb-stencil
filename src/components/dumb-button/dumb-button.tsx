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
  @Prop() buttonClick: Function;

  handleClick = () => {
    this.clicked.emit();
    if (this.buttonClick !== undefined){
      this.buttonClick();
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} disabled={this.disabled}>
        {this.text}
      </button>
    );
  }
}
