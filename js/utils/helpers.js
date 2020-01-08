window._helpers = {
  /**
   * 获取表单数据对象
   * @param form 表单Dom对象或选择器
   * @returns {*}
   */
  getFormData: (form) => {
    form = typeof form === 'string' ? $(form) : form

    return form.serializeArray().reduce((obj, { name, value }) => ({...obj, [name]: value}), {})
  },

  /**
   * 拼接URL
   *
   * @param host
   * @param path
   * @returns {string}
   */
  combineUrl: (host, path = '') => {
    host = host[host.length - 1] === '/'
      ? host.substr(0, host.length - 1)
      : host

    if (host.indexOf('http://') === -1 && host.indexOf('https://') === -1) {
      host = `http://${host}`
    }

    path = path[0] === '/' ? path.substr(1) : path

    return `${host}/${path}`
  }
}
