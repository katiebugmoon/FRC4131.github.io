(function(name, m, d, y, h, mn){
	var date = new Date(y, m-1, d, h, mn, 0);//Months are the only 0-index field here. WHYYY!?
	$(function(){
		window.setInterval(function(){
			var milliseconds = date.getTime() - Date.now();
			var seconds = Math.floor(milliseconds / 1000);
			milliseconds %= 1000;
			var minutes = Math.floor(seconds / 60);
			seconds %= 60;
			var hours = Math.floor(minutes / 60);
			minutes %= 60;
			var days = Math.floor(hours / 24);
			hours %= 24;
			
			var newText = text(days, hours, minutes, seconds), oldText = $('#countdown').text();
			if(newText != oldText) $('#countdown').text(newText);
		}, 1000);
	});
	
	function text(days, hours, minutes, seconds){
		if(days) return days + ' days';
		else if(hours) return hours + ' hours';
		else if(minutes) return minutes + ' minutes';
		else return seconds + ' seconds';
	}
// })('Kickoff 2017', 1, 7, 2016, 7, 0);
})('Kickoff 2017', 10, 29, 2016, 16, 21);
