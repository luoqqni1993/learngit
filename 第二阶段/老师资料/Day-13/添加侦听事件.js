function addEvent(obj,event,fn,boo){
		if(obj.addEventListener){
			obj.addEventListener(event,fn,boo); //标准浏览器
		}else{
			obj.attachEvent("on" + event,fn); //IE8及以下
		}
	}