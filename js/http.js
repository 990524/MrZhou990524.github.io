window._http = {
  // 请求配置
  config: {
    // custom options
    baseUrl: 'api.test', // API服务器地址
    headers: {},  // 请求附加header头
    method: 'GET',

    // Jquery options
    async: true,
    contentType: 'application/json',
    timeout: 5000
    // complete: () => {},
    // beforeSend: () => {}
  },

  // 拦截器
  interceptor: {
    request: config => {
      config.headers.Authorization = 'token'
    },
    response: null
  },

  // interface
  request(options) {
    options.baseUrl = options.baseUrl || this.config.baseUrl
    options.url = _helpers.combineUrl(options.baseUrl, options.url)
    options.data = options.data || {}
    options.method = options.method || this.config.method

    return new Promise((resolve, reject) => {
      let _config = null

      options.beforeSend = xhr => {}

      options.complete = (response, ts) => {
        console.log('response')
        console.log(response)
        const statusCode = response.status
        response.config = _config

        if (this.interceptor.response) {
          response = this.interceptor.response(response) || response
        }

        statusCode >= 200 && statusCode <= 300 ? resolve(response) : reject(response)
      }

      _config = Object.assign({}, this.config, options)
      _config.requestId = new Date().getTime()

      if (this.interceptor.request) {
        this.interceptor.request(_config)
      }

      $.ajax({
        async: false,
        contentType: 'application/json',
        timeout: 5000,
        type: 'POST',
        url:'http://api.test/auth/register'
      })
    })
  },
  get: () => {},
  post(path, data, options = {}) {
    options.url = path
    options.data = data
    options.method = 'POST'
    return this.request(options)
  },
  patch: () => {},
  put: () => {},
  delete: () => {}
}
