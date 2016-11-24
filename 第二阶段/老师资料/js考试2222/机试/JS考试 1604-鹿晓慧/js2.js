//2、封装一个给数组去重排序的方法,调用方法把运行的结果alert出来必须与题干要求的方面名和数组完全相同

var arr = [10,20,8,9,3,2,1,2,2,2,8];
function superSort(arr){
		for ( var i = 0 ; i<arr.length-1 ; i++ )
		{
			for ( var j = i+1 ; j<arr.length ; j++ )
			{
				if ( arr[i]<arr[j] )
				{
					var t = arr[i];
					arr[i] = arr[j];
					arr[j] = t;
				}
			}
		}
		var arr2 = [];
		for ( var i = 0 ; i<arr.length ; i++ )
		{
			if ( arr[i] == arr[i+1] )
			{
				continue;
			}else{
				arr2.push(arr[i]);
			}
		}

		return arr2;
	}
	
	alert(superSort(arr));