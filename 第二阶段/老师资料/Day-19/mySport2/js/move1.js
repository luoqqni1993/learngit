function startMove(obj, attr ,target) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var cur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
		var speed = (target - cur) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(cur == target) {
			clearInterval(obj.timer);
		} else {
			obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
			obj.style.opacity = (cur + speed) / 100;
		}
	}, 30);
}

function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}