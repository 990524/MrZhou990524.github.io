function getCookie(objName){//获取指定名称的cookie的值 
    var arrStr = document.cookie.split("; "); 
    for (var i = 0; i < arrStr.length; i++) { 
        var temp = arrStr[i].split("="); 
        if (temp[0] == objName){ 
            return decodeURI(temp[1]); 
        }
    } 
}

function setToken() {}

function getToken() {}

function login() {

	//1.获取表单数据
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
	
	//验证表单数据是否正确
	if (email === '' || email === null || password === '' || password === null) {
		alert("请检查邮箱或密码是否为空");
		return;
	}
	//2.拼接表单数据
	var params = 'email=' + email + '&password=' + password;
	
	//3.创建XML对象
	var data = params;
	var a = new XMLHttpRequest;

	a.withCredentials = true;

	//4.判断服务器状态
	a.addEventListener("readystatechange", function () {
		if (this.readyState === 4 && this.status === 200) {
			document.cookie = 'token=' + this.responseText;
			var cookie = getCookie('token')
			var auth = JSON.parse(getCookie('token'))
			var token = auth.token_type + ' ' + auth.access_token
			window.localStorage.setItem('auth', this.responseText)
			var localAuth = window.localStorage.getItem('auth')
			alert("登录成功，点击确定跳转至主界面");
			window.location.href='parsing.html';
		}else if (a.status === 0) {
			alert('服务器无响应');
			return false;
		}
	});

	a.open("POST", "http://120.78.198.22:8888/");
	a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	a.setRequestHeader("Accept", "application/json");
	a.send(data);
}

