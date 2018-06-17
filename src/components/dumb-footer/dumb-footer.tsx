import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'dumb-footer',
  styleUrl: 'dumb-footer.css',
  shadow: true
})
export class DumbFooter {
  @Prop() companyName: string = "Company Name";

  render() {
    return (
      <footer class="c-footer">
        <dumb-inline-form
          method="post"
          action="#"
          placeholder="name@email.com"
          cta="Join our newsletter"
          id="search-form"
          label="Email address"
        />

        <p class="c-footer__copyright">&copy; {(new Date()).getFullYear()} {this.companyName}</p>
      </footer>
    );
  }
}
