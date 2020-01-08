/**
 * axios 预设值
 * @see https://github.com/axios/axios
 */

// 默认选项
axios.defaults.baseURL = _env.baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.timeout = 5000

// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (_store.state.token) {
      config.headers['Authorization'] = _store.state.token
    }
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截器
axios.interceptors.response.use(
  response => response.data,
  ({response, request}) => Promise.reject(response ? response.data : request)
);
