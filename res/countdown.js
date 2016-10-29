var countdownTarget = 'Kickoff 2017';
var countdownDate = new Date(2017, 0, 7);
$(function(){
	var delta = Date.now() - countdownDate.valueOf();
	console.log(Date.now(), Date.now.valueOf(), countdownDate, countdownDate.valueOf(), delta);
});
