import { LitElement } from 'lit-element'

import { defineCustomElement, getLastPathSegment } from '../utilities'

export class XWeatherBouncer extends LitElement {
  constructor() {
    super()

    const redirect = () => {
      const lastPathSegment = getLastPathSegment()

      if (lastPathSegment !== 'x-postpress-app') {
        return
      }

      const origin = document.location.origin
      const redirect = `${origin}/${getLastPathSegment()}/`

      if (origin !== 'http://localhost:8000') {
        document.location.href = redirect

        return
      }

    }

    window.addEventListener('popstate', event => {
      console.log('redirecting...')

      redirect()
    })
  }
}

defineCustomElement('x-weather-bouncer', XWeatherBouncer)
