import { LitElement, html, css } from 'lit-element'

import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './components/XWeatherHamburger'
import './components/XWeatherBranding'
import './components/XWeatherBouncer'
import './components/XWeatherContent'
import './components/XWeatherDrawerChildren'

import { getCurrentWeather, getForecastWeather, updateLocation } from 'x-weather/dist/esm/dispatchers'

export class XWeatherApp extends LitElement {
  static get styles() {
    return css`
      app-header {
        background-color: #000;
        color: #fff;

        --app-header-background-front-layer: {
          background-color: #000;
        }

        --app-header-background-rear-layer: {
          background-color: #000;
        }
      }

      app-toolbar {
        background-color: #000;
        font-size: 1.5rem;
      }

      app-drawer {
        --app-drawer-scrim-background: rgba(0, 0, 0, 0.8);
      }

      x-weather-hamburger {
        pointer-events: unset;
      }
    `
  }

  static get properties() {
    return {
      appid: {
        reflect: false,
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

  _handleDrawerChange(event) {
    const appDrawer = this.shadowRoot.querySelector('app-drawer')

    if (appDrawer.getAttribute('opened') === '') {
      appDrawer.removeAttribute('opened')

      return
    }

    appDrawer.setAttribute('opened', '')
  }

  _handleDrawerLocationStorage(location) {
    const storedLocation = localStorage.getItem('x-weather-app-current-location')

    if (storedLocation === location) {
      return storedLocation
    }

    try {
      localStorage.setItem('x-weather-app-current-location', location)
    } catch (error) {
      console.error(error)
    }

    return location
  }

  _handleDrawerLocationChange(location) {
    const handledLocation = this._handleDrawerLocationStorage(location)
    let parsedLocation

    try {
      parsedLocation = JSON.parse(handledLocation)
    } catch (error) {
      parsedLocation = {}

      console.error(error)
    }

    updateLocation({ ...parsedLocation })

    getCurrentWeather({
      appid: this.appid,
      host: this.host
    })

    getForecastWeather({
      appid: this.appid,
      host: this.host
    })
  }

  _handleLocationStorageOnRender(location) {
    const storedLocation = localStorage.getItem('x-weather-app-current-location')

    if (storedLocation !== location && storedLocation !== null) {
      return storedLocation
    }

    try {
      localStorage.setItem('x-weather-app-current-location', location)
    } catch (error) {
      console.error(error)
    }

    return location
  }

  firstUpdated() {
    this.addEventListener('x-weather-drawer-change', event => {
      this._handleDrawerChange(event)
    })

    this.addEventListener('x-weather-drawer-children', ({ detail }) => {
      const location = JSON.stringify(detail)

      this.setAttribute('location', location)
      this._handleDrawerLocationChange(location)
    })
  }

  render() {
    const renderLocation = this._handleLocationStorageOnRender(this.location)
    return renderLocation
      ? html`
          <x-weather-bouncer></x-weather-bouncer>
          <app-header reveals>
            <app-toolbar>
              <x-weather-hamburger>Menu</x-weather-hamburger>
              <x-weather-branding sitetitle="${this.sitetitle}" siteurl="${this.siteurl}"></x-weather-branding>
            </app-toolbar>
          </app-header>

          <app-drawer swipe-open>
            <x-weather-drawer-children></x-weather-drawer-children>
          </app-drawer>

          <x-weather-content
            appid="${this.appid}"
            host="${this.host}"
            forecastdays="14"
            location="${renderLocation}"
            primaryscale="f"
          ></x-weather-content>
        `
      : html`
          &lt;x-weather-app&gt; requires the location attribute.
        `
  }
}
