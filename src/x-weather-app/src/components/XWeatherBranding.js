import { LitElement, css, html } from 'lit-element'

import { defineCustomElement } from '../utilities'

export class XWeatherBranding extends LitElement {
  static get styles() {
    return css`
      :host {
        margin-left: var(--x-weather-branding-margin-left, -1rem);
        text-align: var(--x-weather-branding-text-align, center);
        width: 100%;
      }

      a {
        text-decoration: none;
        color: white;
      }
    `
  }

  static get properties() {
    return {
      sitetitle: {
        reflect: true,
        type: String
      },
      siteurl: {
        reflect: true,
        type: String
      }
    }
  }

  render() {
    return html`
      <div><a href=${this.siteurl}>${this.sitetitle}</a></div>
    `
  }
}

defineCustomElement('x-weather-branding', XWeatherBranding)
