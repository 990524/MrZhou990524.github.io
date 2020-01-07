window._storage = {
    /**
     * 设置Cookie
     *
     * @param name 名称
     * @param value 值
     * @param expires 过期时间(天)
     */
    setCookie: (name, value, expires) => {
        if (typeof expires === 'number') {
            const date = new Date()
            date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000))
            expires = date.toUTCString()
        }

        document.cookie = `${name}=${value};expires=${expires};path=/`
    },

    /**
     * 获取Cookie
     *
     * @param name 名称
     * @param def 默认值
     * @returns {string}
     */
    getCookie: (name, def = null) => {
        name = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return typeof def === 'function' ? def() : def
    },

    setLocalStorage: () => {},
    getLocalStorage: () => {}
}
