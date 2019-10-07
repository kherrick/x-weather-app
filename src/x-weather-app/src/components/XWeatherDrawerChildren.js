import { LitElement, css, html } from 'lit-element'
import '@material/mwc-button'

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
        --mdc-theme-on-primary: #111111;
        --mdc-theme-primary: #cccccc;

        margin-top: 1rem;
        width: 100%;
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
        list-style-type: none;
        margin-left: -0.5rem;
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
      },
      {
        latitude: 41.4081,
        longitude: -92.9164,
        placename: 'Pella, Iowa'
      },
      {
        latitude: 43.6834,
        longitude: -80.433,
        placename: 'Elora, Ontario'
      },
      {
        latitude: 43.5501,
        longitude: -80.2497,
        placename: 'Guelph, Ontario'
      },
      {
        latitude: 37.6597,
        longitude: -97.5754,
        placename: 'Wichita, Kansas'
      },
      {
        latitude: 52.1058,
        longitude: -101.2676,
        placename: 'Swan River, Manitoba'
      },
      {
        latitude: 44.4001,
        longitude: -79.6664,
        placename: 'Barrie, Ontario'
      },
      {
        latitude: 49.8844,
        longitude: -97.1471,
        placename: 'Winnipeg, Manitoba'
      },
      {
        latitude: 41.6834,
        longitude: -86.2501,
        placename: 'South Bend, Indiana'
      },
      {
        latitude: 40.0379,
        longitude: -76.3056,
        placename: 'Lancaster, Pennsylvania'
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
                      <mwc-button
                        @click="${this._handleMenuLocationChange(location)}"
                        label=${location.placename}
                        location
                      ></mwc-button>
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
