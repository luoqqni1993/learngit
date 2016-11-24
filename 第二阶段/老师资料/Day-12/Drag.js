		function drag(obj){
			obj.onmousedown = function(evt){
				var e = evt || window.event;
				var disX = e.offsetX;
				var disY = e.offsetY;
				document.onmousemove = function(evt){
					var e = evt || window.event;
					obj.style.left = e.clientX - disX + "px";
					obj.style.top = e.clientY - disY + "px";
				};
				document.onmouseup = function(){
					document.onmousemove = null;
				};
			};
		}