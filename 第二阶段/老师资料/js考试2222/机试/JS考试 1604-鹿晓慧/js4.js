function myWay(){
	var one = parseInt(classOne.value);
	var regOne = /^[0-9]{4}$/;
	if ( !regOne.test(one))
	{
		alert("只能输入4位数字！");
	}
	var two = parseInt(peoTwo.value);
	var regTwo = /^[0-9]$/;
	if ( !regTwo.test(two))
	{
		alert("只能输入数字！");
	}
	var arr = new Array(two);
		for (var i = 0;i<=arr.length-1 ;i++ )
		{
			arr[i] = parseInt(prompt("请输入"+(i+1)+"名同学的成绩"));	
		}
		var sum = 0;
		for (var i=0;i<=arr.length-1 ;i++ )
		{
			sum += arr[i];
		}
		//alert(sum);
		sumThree.value = sum;
		avgFour.value = sum/arr.length;
		for (var i = 1;i<arr.length-1 ;i++ )
		{
			for (var j =arr.length-1;j>=i ;j-- )
			{
				if (arr[j]>arr[j-1])
				{
					var t = arr[j];
					arr[j]=arr[j-1];
					arr[j-1]=t;
				}
			}
		}
		maxFive.value = arr[0];
		minSix.value = arr[arr.length-1];
		var str = "";
		for (var i=0;i<arr.length-1 ;i++ )
		{
			str+="第"+(i+1)+"名"+arr[i]+"分";
		}
		seven.value=str;
}
function Cclear(){
	classOne.value=" ";
	peoTwo.value=" ";
	sumThree.value = " ";
	avgFour.value = " ";
	maxFive.value = " ";
	minSix.value = " ";
	seven.value = " ";

}
