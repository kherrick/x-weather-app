export const defineCustomElement = (tagName, element) => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, element)
  }
}

export const getBasePathWithTrailingSlash = () =>
  `${new URL(document.querySelector('base').href).pathname}/`.replace(/\/+\//g, '/')

export const getLastPathSegment = () => {
  const match = window.location.pathname.match(/\/([a-z0-9_-]*[\/]?)$/)

  return match ? match[0].replace(/\//g, '') : ''
}
