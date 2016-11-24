			function Drag(id){
				var _this = this;
				this.oDiv = document.getElementById(id);
				this.disX = 0;
				this.disY = 0;
				this.oDiv.onmousedown = function(evt){
					
					_this.fnDown(evt);
				}
			}
			Drag.prototype.fnDown = function (evt){
				var _this = this;
				var e = evt || window.event;
				this.disX = e.offsetX;
				this.disY = e.offsetY;
				document.onmousemove = function(evt){
					_this.fnMove(evt);
				}
				document.onmouseup = function(){
					_this.fnUp();
				};
			}
			Drag.prototype.fnMove = function (evt){
				var e = evt || window.event;
				this.oDiv.style.left = e.clientX - this.disX + 'px';
				this.oDiv.style.top = e.clientY - this.disY + 'px';
			}
			Drag.prototype.fnUp = function (){
				document.onmousemove = null;
			}