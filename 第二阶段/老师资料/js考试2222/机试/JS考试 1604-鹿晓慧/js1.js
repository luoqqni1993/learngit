
for ( var i = 0 ; i<10 ; i++ )
		{
			document.write("*");
			if ( i == 9 )
			{
				for ( var j = 0 ; j<9 ; j++ )
				{
					document.write("*");
				}
			}else{
				for ( var k = 0 ; k<i ; k++ )
				{
					document.write("&nbsp;");
				}
			}
			if ( i == 0 )
			{
				document.write("<br/>");
			}else{
				document.write("*" + "<br/>");
			}
		}