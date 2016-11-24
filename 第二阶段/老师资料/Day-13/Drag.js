		function drag(obj){
	
			//键盘控制对象移动
			document.onkeydown = function(evt){
				
				var e = evt || window.event;
				switch (e.keyCode){
					case 37: 
						var left = obj.offsetLeft - 10;
						if( left < 0){
							left = 0;
						}
						obj.style.left = left + "px";break;
					case 38: 
						var top = obj.offsetTop - 10;
						if( top < 0){
							top = 0;
						}
						obj.style.top = top + "px";break;
					case 39: 
						var left = obj.offsetLeft + 10;
						if( left > document.documentElement.clientWidth - obj.offsetWidth){
							left = document.documentElement.clientWidth - obj.offsetWidth;
						}
						obj.style.left = left + "px";break;
					case 40: 
						var top = obj.offsetTop + 10;
						if( top > document.documentElement.clientHeight - obj.offsetHeight){
							top = document.documentElement.clientHeight - obj.offsetHeight;
						}
						obj.style.top = top + "px";
				}
			};
			
			//鼠标拖拽
			obj.onmousedown = function(evt){
				var e = evt || window.event;
				var disX = e.offsetX;
				var disY = e.offsetY;
				document.onmousemove = function(evt){
					var e = evt || window.event;
					var X = e.clientX - disX;
					var Y = e.clientY - disY;
					
					
					if ( X < 0){
						X = 0;
					}else if ( X > document.documentElement.clientWidth - obj.offsetWidth){ //页面的可视宽度 - 对象的相对宽度
							X = document.documentElement.clientWidth - obj.offsetWidth;
					}
					
					if(Y < 0){
						Y = 0;
					}else if (Y > document.documentElement.clientHeight - obj.offsetHeight){  //页面的可视高度 - 对象的相对高度
						Y = document.documentElement.clientHeight - obj.offsetHeight;
					}
					obj.style.left = X + "px";
					obj.style.top = Y + "px";
				};
				document.onmouseup = function(){
					document.onmousemove = null;
				};
			};
		}