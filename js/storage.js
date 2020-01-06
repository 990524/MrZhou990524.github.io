window._storage = {
    setCookie: name => {
        const arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] == name){
                return decodeURI(temp[1]);
            }
        }
    },
    getCookie: () => {},

    setLocalStorage: () => {},
    getLocalStorage: () => {}
}
