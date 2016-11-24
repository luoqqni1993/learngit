

function myWay(){
	var now = new Date(0);
	now.setFullYear(year.value);
	now.setMonth(mont.value-1);
	now.setDate(date.value);
	switch (now.getDay())
	{
		case 0: day.value = "星期日"; break;
		case 1: day.value = "星期一"; break;
		case 2: day.value = "星期二"; break;
		case 3: day.value = "星期三"; break;
		case 4: day.value = "星期四"; break;
		case 5: day.value = "星期五"; break;
		case 6: day.value = "星期六"; break;
		default: break;
	}
}
function cclear(){
	year.value = "";
	mont.value = "";
	date.value = "";
	day.value = "";
}
function rreg(){
	var reg = /^[0-9]*$/;
	if ( !reg.test(year.value) || !reg.test(mont.value)||! reg.test(date.value) )
	{
		alert("只能输入数字！");
	}
}
