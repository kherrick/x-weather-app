import { LitElement, css, html } from 'lit-element'

const XWeatherDrawerChildren = class extends LitElement {
  static get styles() {
    return css`
      div {
        background-color: #111111;
        color: #cccccc;
        height: 100%;
        overflow: auto;
      }

      [location] {
        color: #ccc;
        cursor: pointer;
      }

      [location]:hover {
        text-decoration: underline;
      }

      h1 {
        font-size: 1.5rem;
        color: #ddd;
      }

      ul {
        list-style-type: none;
        padding: 0 1rem 0 1rem;
      }

      ul > li ul > li {
        list-style-type: disc;
        margin-left: 0.5rem;
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

  _handleMenuLocationChange(location) {
    return event => {
      this.shadowRoot.dispatchEvent(
        new CustomEvent('x-weather-drawer-children', {
          bubbles: true,
          composed: true,
          detail: location
        })
      )

      this._handleDrawerChange(event)
    }
  }

  get locations() {
    return [
      {
        latitude: 42.35,
        longitude: -83.06,
        placename: 'Detroit, Michigan'
      },
      {
        latitude: 33.43,
        longitude: -112.11,
        placename: 'Phoenix, Arizona'
      },
      {
        latitude: 42.57,
        longitude: -84.42,
        placename: 'Mason, Michigan'
      },
      {
        latitude: 47.62,
        longitude: -117.43,
        placename: 'Spokane, Washington'
      }
    ]
  }

  render() {
    return html`
      <div>
        <ul>
          <li>
            <h1>Featured Cities</h1>
            <div>
              <ul>
                ${this.locations.map(
                  location => html`
                    <li>
                      <div location @click="${this._handleMenuLocationChange(location)}">${location.placename}</div>
                    </li>
                  `
                )}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    `
  }
}

if (!customElements.get('x-weather-drawer-children')) {
  customElements.define('x-weather-drawer-children', XWeatherDrawerChildren)
}

export default XWeatherDrawerChildren
