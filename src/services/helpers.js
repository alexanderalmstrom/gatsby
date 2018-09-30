export function stripTags(html) {
  return html.replace(/(<([^>]+)>)/gi, '')
}

export function truncate(html, length = 220, separator = '...') {  
  if (html.length > length) {
    html = stripTags(html.substring(0, length)) + separator
  }

  return html
}