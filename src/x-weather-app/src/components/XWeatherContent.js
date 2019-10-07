import { LitElement, css, html } from 'lit-element'

import 'x-weather'

const XWeatherContent = class extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 1rem;
      }

      header {
        font-size: var(--x-weather-content-forecast-header-font-size, 1.5rem);
        margin-bottom: 1rem;
        text-align: center;
      }
    `
  }

  static get properties() {
    return {
      appid: {
        reflect: true,
        type: String
      },
      host: {
        reflect: true,
        type: String
      },
      location: {
        reflect: true,
        type: String
      },
      primaryscale: {
        reflect: true,
        type: String
      },
      forecastdays: {
        reflect: true,
        type: String
      }
    }
  }

  render() {
    return html`
      <x-weather
        appid="${this.appid}"
        host="${this.host}"
        latitude="${JSON.parse(this.location).latitude}"
        longitude="${JSON.parse(this.location).longitude}"
        placename="${JSON.parse(this.location).placename}"
      >
        <x-current primaryscale="${this.primaryscale}"></x-current>

        <header><strong>Forecast</strong></header>
        <x-forecast days="${this.forecastdays}" primaryscale="${this.primaryscale}"></x-forecast>
      </x-weather>
    `
  }
}

if (!customElements.get('x-weather-content')) {
  customElements.define('x-weather-content', XWeatherContent)
}

export default XWeatherContent
