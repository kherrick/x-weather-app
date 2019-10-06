import { LitElement, css, html } from 'lit-element'

const XWeatherHamburger = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin-top: 0.5rem;
        width: 1.5rem;
      }

      div {
        cursor: pointer;
        pointer-events: all;
        position: relative;
      }

      svg {
        height: 1.5rem;
        pointer-events: none;
        width: 1.5rem;
      }
    `
  }

  _handleDrawerChange(event) {
    this.shadowRoot.dispatchEvent(
      new CustomEvent('x-weather-drawer-change', {
        bubbles: true,
        composed: true,
        detail: event
      })
    )
  }

  render() {
    return html`
      <div @click="${event => this._handleDrawerChange(event)}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="black" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white" />
        </svg>
      </div>
    `
  }
}

if (!customElements.get('x-weather-hamburger')) {
  customElements.define('x-weather-hamburger', XWeatherHamburger)
}

export default XWeatherHamburger
