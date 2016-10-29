(function(name, date){
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
			
			if(days) $('#countdown').text(days + ' days to ' + name);
			else if(hours) $('#countdown').text(hours + ' hours to ' + name + '!');
			else if(minutes) $('#countdown').text(hours + ' minutes to ' + name + '!!');
			else $('#countdown').text(seconds + ' SECONDS TO ' + name + '!!!');
		}, 1000);
	});
})('Kickoff 2017', new Date(2017, 0, 7));
