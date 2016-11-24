function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, 1)[attr];
}

function startMove(obj, json, fn) { //{width:101,height:3000}
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var stop = true; //标志变量，假设json中的属性已经全部达成目标，可以结束计算器
		for(var attr in json) {
			//1.获取当前值
			var cur = 0;
			if(attr == 'opacity') {
				cur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				cur = parseInt(getStyle(obj, attr));
			}

			//2.计算速度
			var speed = (json[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			//3.检测停止
			if(cur != json[attr]) {  //101 == 101  3000  3000
				stop = false;
			}

			if(attr == 'opacity') {
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + 'px';
			}

		}
		if(stop) {
			clearInterval(obj.timer);
			if(fn) {
				fn();
			}
		}
	}, 30);
}