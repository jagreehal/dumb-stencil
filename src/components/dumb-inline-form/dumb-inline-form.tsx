import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-inline-form',
  styleUrl: 'dumb-inline-form.css',
  shadow: true
})
export class DumbInlineForm {
  @Prop() method: string;
  @Prop() action: string;
  @Prop() cta: string;
  @Prop() id: string;
  @Prop() label: string;
  @Prop() placeholder: string;

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
        <dumb-button text={this.cta} />
      </form>
    );
  }
}
