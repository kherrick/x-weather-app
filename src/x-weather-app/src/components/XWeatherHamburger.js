import { LitElement, css, html } from 'lit-element'
import '@material/mwc-button'
import '@polymer/paper-icon-button'
import '@polymer/iron-icons'

const XWeatherHamburger = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;

        width: 1.5rem;
      }

      paper-icon-button {
        --mdc-theme-primary: #cccccc;
        --mdc-theme-on-primary: white;
        pointer-events: all;
        position: relative;
        height: 3rem;
        width: 3rem;
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
      <paper-icon-button
        @click="${event => this._handleDrawerChange(event)}"
        aria-label="Featured Cities"
        icon="menu"
      ></paper-icon-button>
    `
  }
}

if (!customElements.get('x-weather-hamburger')) {
  customElements.define('x-weather-hamburger', XWeatherHamburger)
}

export default XWeatherHamburger
