function Registered() {

	//1.获取表单数据
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	//2.拼接表单数据
	var params = 'email=' + email + '&password=' + password;

	//3.创建XML对象
	var data = params;
	var a = new XMLHttpRequest;
	a.withCredentials = true;

	//4.响应状态
	a.addEventListener("readystatechange", function() {
		if(this.readyState === 4 && this.status === 201) {
			alert("注册成功,点击确定跳转至登录页面");
			window.location.href="index.html"
		}
		if(this.status > 300){
			alert("注册失败");
		}
	});

	a.open("POST", "http://api.hicoder.cc/auth/register");
	a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	a.setRequestHeader("Accept", "application/json");
	a.send(data);
}