function drag(obj){
		obj.onmousedown=function(evt){
			var e=evt||window.event;
			var iLeft=e.offsetX;
			var iTop=e.offsetY;
			document.onmousemove=function(evt){
				var e=evt||window.event;
				var X=e.clientX-iLeft;
				var Y=e.clientY-iTop;
				if(X<0){
					X=0;
					}else if(X>document.documentElement.clientWidth-obj.offsetWidth){
						X=document.documentElement.clientWidth-obj.offsetWidth;
						}
				if(Y<0){
					Y=0
					}else if(Y>document.documentElement.clientHeight-obj.offsetHeight){
						Y=document.documentElement.clientHeight-obj.offsetHeight;
						}
					obj.style.left=X+"px";
					obj.style.top=Y+"px";
			};
			document.onmouseup=function(){
				document.onmousemove=null;
			};
			
		};
	}  