export function stripHTML(html) {
  return html.replace(/(<([^>]+)>)/gi, '')
}
