window._api = window._api || {}

window._api.user = {
  register: payload => _http.post('/auth/register', payload),
  login: () => {},
  fetchMe: () => {}
}
