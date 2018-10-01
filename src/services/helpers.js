export function stripTags(html) {
  return html.replace(/(<([^>]+)>)/gi, '')
}

export function truncate(html, length = 220, separator = '...') {
  if (html.length > length) {
    html = stripTags(html.substring(0, length)) + separator
  }

  return html
}

export function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}