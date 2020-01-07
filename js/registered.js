function Registered() {

	//1.获取表单数据
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	//验证表单数据是否正确
	if (email === '' || email === null || password === '' || password === null) {
		alert("请检查邮箱或密码是否为空");
	}
	//2.拼接表单数据
	var params = 'email=' + email + '&password=' + password;

	//3.创建XML对象
	var data = params;
	var a = new XMLHttpRequest;
	a.withCredentials = true;

	//4.响应状态
	a.addEventListener("readystatechange", function() {
		// 关于 readyState 的解释 https://blog.csdn.net/alex8046/article/details/40587939
		// 不为4的时候客户端调用无意义
		if (this.readyState !== 4) {
			return
		}

		// 解析响应为json
		var response = JSON.parse(this.responseText)

		if (this.status >= 200 && this.status < 300) {
			alert("注册成功,点击确定跳转至登录页面");
			window.location.href = "index.html"
		}

		alert(response.message || "注册失败");
	});

	a.open("POST", "http://api.hicoder.cc/auth/register");
	a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	a.setRequestHeader("Accept", "application/json");
	a.send(data);
}
