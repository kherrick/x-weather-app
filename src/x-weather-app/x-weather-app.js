import { XWeatherApp } from './src/XWeatherApp.js'

if (!customElements.get('x-weather-app')) {
  customElements.define('x-weather-app', XWeatherApp)
}
