/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  CardListItem,
} from './components/dumb-card-list/dumb-card-list';
import {
  PrimaryNavItem,
} from './components/dumb-primary-nav/dumb-primary-nav';

declare global {

  namespace StencilComponents {
    interface DumbButton {
      'buttonClick': Function;
      'disabled': boolean;
      'text': string;
    }
  }

  interface HTMLDumbButtonElement extends StencilComponents.DumbButton, HTMLStencilElement {}

  var HTMLDumbButtonElement: {
    prototype: HTMLDumbButtonElement;
    new (): HTMLDumbButtonElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-button': HTMLDumbButtonElement;
  }
  interface ElementTagNameMap {
    'dumb-button': HTMLDumbButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-button': JSXElements.DumbButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbButtonAttributes extends HTMLAttributes {
      'buttonClick'?: Function;
      'disabled'?: boolean;
      'onClicked'?: (event: CustomEvent) => void;
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbCardList {
      'listItems': string | CardListItem[];
    }
  }

  interface HTMLDumbCardListElement extends StencilComponents.DumbCardList, HTMLStencilElement {}

  var HTMLDumbCardListElement: {
    prototype: HTMLDumbCardListElement;
    new (): HTMLDumbCardListElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-card-list': HTMLDumbCardListElement;
  }
  interface ElementTagNameMap {
    'dumb-card-list': HTMLDumbCardListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-card-list': JSXElements.DumbCardListAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbCardListAttributes extends HTMLAttributes {
      'listItems'?: string | CardListItem[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbCard {
      'cardDescription': string;
      'cardTitle': string;
    }
  }

  interface HTMLDumbCardElement extends StencilComponents.DumbCard, HTMLStencilElement {}

  var HTMLDumbCardElement: {
    prototype: HTMLDumbCardElement;
    new (): HTMLDumbCardElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-card': HTMLDumbCardElement;
  }
  interface ElementTagNameMap {
    'dumb-card': HTMLDumbCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-card': JSXElements.DumbCardAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbCardAttributes extends HTMLAttributes {
      'cardDescription'?: string;
      'cardTitle'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbFooter {
      'companyName': string;
    }
  }

  interface HTMLDumbFooterElement extends StencilComponents.DumbFooter, HTMLStencilElement {}

  var HTMLDumbFooterElement: {
    prototype: HTMLDumbFooterElement;
    new (): HTMLDumbFooterElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-footer': HTMLDumbFooterElement;
  }
  interface ElementTagNameMap {
    'dumb-footer': HTMLDumbFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-footer': JSXElements.DumbFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbFooterAttributes extends HTMLAttributes {
      'companyName'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbHeader {
      'companyName': string;
      'listItems': string;
    }
  }

  interface HTMLDumbHeaderElement extends StencilComponents.DumbHeader, HTMLStencilElement {}

  var HTMLDumbHeaderElement: {
    prototype: HTMLDumbHeaderElement;
    new (): HTMLDumbHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-header': HTMLDumbHeaderElement;
  }
  interface ElementTagNameMap {
    'dumb-header': HTMLDumbHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-header': JSXElements.DumbHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbHeaderAttributes extends HTMLAttributes {
      'companyName'?: string;
      'listItems'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbHero {
      'heroDescription': string;
      'heroImgAlt': string;
      'heroImgSrc': string;
      'heroTitle': string;
    }
  }

  interface HTMLDumbHeroElement extends StencilComponents.DumbHero, HTMLStencilElement {}

  var HTMLDumbHeroElement: {
    prototype: HTMLDumbHeroElement;
    new (): HTMLDumbHeroElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-hero': HTMLDumbHeroElement;
  }
  interface ElementTagNameMap {
    'dumb-hero': HTMLDumbHeroElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-hero': JSXElements.DumbHeroAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbHeroAttributes extends HTMLAttributes {
      'heroDescription'?: string;
      'heroImgAlt'?: string;
      'heroImgSrc'?: string;
      'heroTitle'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbInlineForm {
      'action': string;
      'cta': string;
      'id': string;
      'label': string;
      'method': string;
      'placeholder': string;
    }
  }

  interface HTMLDumbInlineFormElement extends StencilComponents.DumbInlineForm, HTMLStencilElement {}

  var HTMLDumbInlineFormElement: {
    prototype: HTMLDumbInlineFormElement;
    new (): HTMLDumbInlineFormElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-inline-form': HTMLDumbInlineFormElement;
  }
  interface ElementTagNameMap {
    'dumb-inline-form': HTMLDumbInlineFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-inline-form': JSXElements.DumbInlineFormAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbInlineFormAttributes extends HTMLAttributes {
      'action'?: string;
      'cta'?: string;
      'id'?: string;
      'label'?: string;
      'method'?: string;
      'placeholder'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbKitchenSink {

    }
  }

  interface HTMLDumbKitchenSinkElement extends StencilComponents.DumbKitchenSink, HTMLStencilElement {}

  var HTMLDumbKitchenSinkElement: {
    prototype: HTMLDumbKitchenSinkElement;
    new (): HTMLDumbKitchenSinkElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-kitchen-sink': HTMLDumbKitchenSinkElement;
  }
  interface ElementTagNameMap {
    'dumb-kitchen-sink': HTMLDumbKitchenSinkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-kitchen-sink': JSXElements.DumbKitchenSinkAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbKitchenSinkAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbLogo {
      'alt': string;
      'href': string;
      'src': string;
    }
  }

  interface HTMLDumbLogoElement extends StencilComponents.DumbLogo, HTMLStencilElement {}

  var HTMLDumbLogoElement: {
    prototype: HTMLDumbLogoElement;
    new (): HTMLDumbLogoElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-logo': HTMLDumbLogoElement;
  }
  interface ElementTagNameMap {
    'dumb-logo': HTMLDumbLogoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-logo': JSXElements.DumbLogoAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbLogoAttributes extends HTMLAttributes {
      'alt'?: string;
      'href'?: string;
      'src'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbPrimaryNav {
      'listItems': string | PrimaryNavItem[];
      'styleModifier': string;
    }
  }

  interface HTMLDumbPrimaryNavElement extends StencilComponents.DumbPrimaryNav, HTMLStencilElement {}

  var HTMLDumbPrimaryNavElement: {
    prototype: HTMLDumbPrimaryNavElement;
    new (): HTMLDumbPrimaryNavElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-primary-nav': HTMLDumbPrimaryNavElement;
  }
  interface ElementTagNameMap {
    'dumb-primary-nav': HTMLDumbPrimaryNavElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-primary-nav': JSXElements.DumbPrimaryNavAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbPrimaryNavAttributes extends HTMLAttributes {
      'listItems'?: string | PrimaryNavItem[];
      'styleModifier'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbSection {
      'sectionDescription': string;
      'sectionTitle': string;
    }
  }

  interface HTMLDumbSectionElement extends StencilComponents.DumbSection, HTMLStencilElement {}

  var HTMLDumbSectionElement: {
    prototype: HTMLDumbSectionElement;
    new (): HTMLDumbSectionElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-section': HTMLDumbSectionElement;
  }
  interface ElementTagNameMap {
    'dumb-section': HTMLDumbSectionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-section': JSXElements.DumbSectionAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbSectionAttributes extends HTMLAttributes {
      'sectionDescription'?: string;
      'sectionTitle'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DumbTextPassage {
      'first': string;
      'last': string;
    }
  }

  interface HTMLDumbTextPassageElement extends StencilComponents.DumbTextPassage, HTMLStencilElement {}

  var HTMLDumbTextPassageElement: {
    prototype: HTMLDumbTextPassageElement;
    new (): HTMLDumbTextPassageElement;
  };
  interface HTMLElementTagNameMap {
    'dumb-text-passage': HTMLDumbTextPassageElement;
  }
  interface ElementTagNameMap {
    'dumb-text-passage': HTMLDumbTextPassageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'dumb-text-passage': JSXElements.DumbTextPassageAttributes;
    }
  }
  namespace JSXElements {
    export interface DumbTextPassageAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;