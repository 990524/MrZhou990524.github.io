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
   * @param schema
   * @param path
   * @returns {string}
   */
  combineUrl: (schema, path) => {
    schema = schema[schema.length - 1] === '/'
      ? schema.substr(0, schema.length - 1)
      : schema

    if (schema.indexOf('http://') === -1 || schema.indexOf('https://') === -1) {
      schema = `http://${schema}`
    }

    path = path[0] === '/' ? path.substr(1) : path

    return `${schema}/${path}`
  }
}
