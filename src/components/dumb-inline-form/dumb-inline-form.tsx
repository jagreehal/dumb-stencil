import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-inline-form',
  styleUrl: 'dumb-inline-form.css',
  shadow: true
})
export class DumbInlineForm {
  @Element() el: HTMLElement;

  @Prop() method: string;
  @Prop() action: string;
  @Prop() cta: string;
  @Prop() id: string;
  @Prop() label: string;
  @Prop() placeholder: string;

  handleButtonClick = () => {
    this.el.shadowRoot.querySelector('form').submit()
  }

  render() {
    return (
      <form
        class="c-inline-form"
        method={this.method}
        action={this.action}
      >
        <label htmlFor={this.id} class="c-inline-form__label u-is-vishidden">{this.label}</label>
        <input
          id={this.id}
          class="c-inline-form__input"
          placeholder={this.placeholder}
        />
        <dumb-button text={this.cta} buttonClick={this.handleButtonClick} />
      </form>
    );
  }
}
