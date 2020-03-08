import { LitElement, css, html } from 'lit-element'

import '@material/mwc-button'

import { defineCustomElement } from '../utilities'

export class XWeatherDrawerChildren extends LitElement {
  static get styles() {
    return css`
      .drawer-container {
        background-color: var(--primary-foreground-color, #111);
        color: var(--primary-background-color, #ccc);
        height: 100%;

        /* scroll without scrollbars */
        overflow: auto;
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */
      }

      /* scroll without scrollbars */
      .drawer-container::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }

      .location, .theme {
        --mdc-theme-on-primary: #111111;
        --mdc-theme-primary: #cccccc;

        margin-top: 1rem;
        width: 100%;
      }

      .location:hover, .theme:hover {
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

      .drawer-container > ul > li {
        margin-bottom: 2rem;
      }

      ul > li ul > li {
        list-style-type: none;
        margin-left: -0.5rem;
      }

      mwc-button {
        background-color: var(--x-weather-drawer-children-mwc-button, #222);
      }
    `
  }

  _themeOptions = ['light', 'dark']

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

  _handleMenuRedirect(location) {
    return event => {
      document.location.href = location
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

  _enableTheme(newTheme = 'light', withTransition = false, persist = true) {
    const html = document.documentElement

    let otherTheme
    if (newTheme === 'light') {
      otherTheme = 'dark'
    } else {
      otherTheme = 'light'
    }

    html.classList.add(`theme-${newTheme}`)
    html.classList.remove(`theme-${otherTheme}`)

    if (persist) {
      this._persistToStorage('preference-theme', newTheme)
    }
  }

  _getThemeFromBrowser() {
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQueryList.matches) {
      return 'dark'
    } else {
      mediaQueryList = window.matchMedia('(prefers-color-scheme: light)')

      if (mediaQueryList.matches) {
        return 'light'
      } else {
        return undefined
      }
    }
  }

  _getThemeFromStorage() {
    const pref = localStorage.getItem('preference-theme')
    const lastChanged = localStorage.getItem('preference-theme-last-change')

    let now = new Date()
    now = now.getTime()

    const minutesPassed = (now - lastChanged) / (1000 * 60)

    if (minutesPassed < 120 && pref === 'light') {
      return 'light'
    } else if (minutesPassed < 120 && pref === 'dark') {
      return 'dark'
    } else {
      return undefined
    }
  }

  _getThemeFromTime() {
    const date = new Date()
    const hour = date.getHours()

    if (hour > 20 || hour < 5) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  _keepInSync() {
    window.addEventListener('storage', event => {
      if (event.key === 'preference-theme') {
        if (event.newValue === 'light') {
          this._enableTheme('light', true, false)
        } else if (event.newValue === 'dark') {
          this._enableTheme('dark', true, false)
        }
      }
    })
  }

  _persistToStorage(key, value) {
    let now = new Date()
    now = now.getTime()

    localStorage.setItem(key, value)
    localStorage.setItem(`${key}-last-change`, now)
  }

  _watchPreferesColorScheme() {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQueryList.addListener(event => {
      const root = document.documentElement

      if (event.matches !== true) {
        if (!root.classList.contains('theme-light')) {
          this._enableTheme('light', true)
        }
      } else {
        if (!root.classList.contains('theme-dark')) {
          this._enableTheme('dark', true)
        }
      }
    })
  }

  firstUpdated() {
    this._keepInSync()
    this._watchPreferesColorScheme()
    this._enableTheme(this._getThemeFromStorage() || this._getThemeFromBrowser() || this._getThemeFromTime(), false)
  }

  render() {
    return html`
      <div class="drawer-container">
        <ul>
          <li>
            <h1>Theme</h1>
            <div>
              <ul>
                ${this._themeOptions.map(
                  themeOption => {
                    return html`
                    <li>
                      <mwc-button
                        @click=${() => this._enableTheme(themeOption, true)}
                        label=${themeOption}
                        class="theme"
                      ></mwc-button>
                    </li>
                  `
                  }
                )}
              </ul>
            </div>
          </li>
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
                        class="location"
                      ></mwc-button>
                    </li>
                  `
                )}
              </ul>
            </div>
          </li>
          <li>
            <h1>Links</h1>
            <div>
              <ul>
                <li>
                  <mwc-button
                    @click="${this._handleMenuRedirect('https://infinitym.ca/posts/')}"
                    label="MCA Infinity Robotics - Posts"
                    class="location"
                  ></mwc-button>
                </li>
                <li>
                  <mwc-button
                    @click="${this._handleMenuRedirect('https://kherrick.github.io/tfjs-component-playground/')}"
                    label="TFJS Component Playground"
                    class="location"
                  ></mwc-button>
                </li>
                <li>
                  <mwc-button
                    @click="${this._handleMenuRedirect('https://kherrick.github.io/x-postpress-app/')}"
                    label="XPostpress App"
                    class="location"
                  ></mwc-button>
                </li>
                <li>
                  <mwc-button
                    @click="${this._handleMenuRedirect('https://kherrick.github.io/pwgen/')}"
                    label="pwgen"
                    class="location"
                  ></mwc-button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    `
  }
}

defineCustomElement('x-weather-drawer-children', XWeatherDrawerChildren)
