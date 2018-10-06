import GoTrue from 'gotrue-js'

export const auth = new GoTrue({
  APIUrl: 'https://gatsbycontentful.netlify.com/.netlify/identity',
  audience: '',
  setCookie: false
})
