// ��������ȥ��
function superSort(arr){
	function sortNumber(a,b){
		return a - b;
	}
	//[1,2,3,4,4,5,6,7,3,5,7]
	var a = arr.sort(sortNumber);
	var b= [];
	for(var i=0; i < a.length; i++){
		var num = true;
		for(var j=i+1; j < a.length; j++){
			if(a[i]== a[j]){
				num = false;
				break;
			}
		}
		if(num){
			b.push(a[i]);
		}
	}
	alert(b.reverse());
	return b.reverse();
}


//  �ַ������
function toArray(str,i){
	return str.split(i);
}

//  ������أ�ȥ�أ���
function removeRepeat (arr){
	//arr=[1,2,3,4,4,5,6,7,3,5,7]
	// [1, 2, 4, 5, 6, 7, 3, 5, 7]
	var arr1 = [];
	for(var i=0; i<arr.length; i++){
		var repeat = true;
		for(var j=i+1; j<arr.length; j++){
			if(arr[i]==arr[j]){
				var repeat = false;
			}
		}
		if(repeat){
			arr1.push(arr[i]);
		}
	}
	//alert(arr1);
	return arr1;
}

// classname�ļ�����д��
function getbyclassname(classname){
	if(document.getElementsByClassName == undefind){
		var newArr = [];
		var arr = document.getElementsByTagName("*");
		for(var i=0; i<arr.length; i++){
			if(arr[i].className == classname){
				newArr.push(arr[i]);
			}
		}
		return newArr;
	} else {
		return document.getElementsByClassName("classname");
	}
	
}

//��������$create 
function $create(str){
	if(str.charAt(0) == "<" && str.charAt(str.length-1) == ">"){
		var str1 = "";
		for(var i=1; i<str.length-1; i++)
		{
			str1 = str1 + str.charAt(i);
		}
		//alert(str1);
		bqObj = document.createElement(str1);
		bqObj.style.background = "red";
		bqObj.style.height = "30px";
		document.body.appendChild(bqObj);
		
	}
	else{
		var bqObj1 = document.createTextNode(str);
		bqObj.appendChild(bqObj1);
	}
	return bqObj;
}

// 쳲��������У�
function f(x){
		if(x<=2){
			return 1;
		}
		return f(x-1)+f(x-2);
	}




