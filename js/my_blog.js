$(document).ready(function($) {
	genCalendar();
	console.log('calendar');
});


function genCalendar(){
	//paint monthly calendar
	var month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	for (var i = 0; i < 35; i++) {
		$('<li><span></span></li>').appendTo('.month-body').addClass('month-cell');
	};

		var today = new Date();
		var year = today.getFullYear();
		var month_index =  today.getMonth();
		var month = month_index + 1;
		var date = today.getDate();  //获取日期
		var day = today.getDay(); //获取星期

		console.log('day:'+day);
		console.log('date:'+date);

		if(month<10){
			month = '0' + month;
		}

		var isLeapYear = year%4;

		if(isLeapYear == 0 ){
			month_days[1] = 29;
		}

		if(day == 0){
			day = 7;
		}

		var firstDay = (day-(date%7-1))%7;  //这个月第一天是星期几？

		var f = firstDay;
		for (var i = 1; i < month_days[month_index]; i++) {
			$('li.month-cell span').eq(f).text(i).parent().addClass('pink');
			f++;
		}
		$('li.month-cell span').eq(date+day-2).parent().removeClass('pink').addClass('azure');

		$('.month-head span').text(year+"."+month);
};
