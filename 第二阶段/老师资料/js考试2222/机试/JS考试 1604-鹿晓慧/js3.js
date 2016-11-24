//3、写一个方法求数列1，1，2，3，5，8，13，21的第n个数的值（斐波那契数列）
function fib(n){
			if ( n <= 2)
			{
				return 1;
			}else{
				return fib(n-1)+fib(n-2);
			}
		}
		/*function get(n){
			var sum = "";
			for ( var i = 1 ; i<=n ; i++ )
			{
				sum += fib(i) + " ";
			}
			return sum;
		}*/
		var n = prompt("请输入数字n：");
		alert( "斐波那契数列第n个数的值是：" + fib(n) );
		