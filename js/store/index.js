{
  // token在Cookie中的键
  const TOKEN_KEY = 'jwt_token_string'

  // 用于保存公共数据
  const state = {
    user: {},
    token: _storage.getCookie(TOKEN_KEY)
  }

  // 建议将所有修改公共数据的动作写在这里
  const actions = {
    fetchUserInfo: async() => {
      const { data } = await _api.user.fetchMe()
      state.user = data
    },
    login: async(form) => {
      const res = await _api.user.login(form)

      const jwtTokenString = `${res.token_type} ${res.access_token}`
      _storage.setCookie(TOKEN_KEY, jwtTokenString, 7)
      state.token = jwtTokenString

      await actions.fetchUserInfo()
    }
  }

  const getters = {
    isLogin: () => !!state.token
  }

  // 维护公共数据
  window._store = { state, actions, getters }

  if (_store.state.token) {
    _store.actions.fetchUserInfo()
  }
}
