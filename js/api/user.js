window._api = window._api || {}

window._api.user = {
  register: payload => axios.post('/auth/register', payload),
  login: payload => axios.post('/auth/login', payload),
  fetchMe: (payload = {}) => axios.get('/users/me', payload)
}
