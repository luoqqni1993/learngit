function startMove(obj, target ,attr) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var cur = parseInt(getStyle(obj, attr));
		var speed = (target - cur) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(cur == target) {
			clearInterval(obj.timer);
		} else {
			obj.style[attr] = cur + speed + 'px';
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