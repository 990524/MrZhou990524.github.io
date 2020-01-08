var PopUp = function(content) {
	var Body = $('body') 									//获取节点
	var create = Body.append('<div id="popUp"></div>'); 	//插入新节点
	var Animation = $('#popUp'); 							//获取插入的节点
	Animation.text(content) 								//添加文本
	Animation.fadeIn(300); 									//添加进入动画
	setTimeout(function() {Animation.fadeOut(300)}, 3000) 	//添加定时器秒和结束动画
	setTimeout(function() {Animation.remove()}, 3000) 		//添加定时器3秒以后删除创建的节点
}
