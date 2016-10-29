var countdownTarget = 'Kickoff 2017';
var countdownDate = new Date(2017, 0, 7);
$(function(){
	var delta = countdownDate.getTime() - Date.now();
	var ms = delta;
	var s = Math.floor(ms / 100);
	ms %= 100;
	var m = Math.floor(s / 60);
	s %= 60;
	var h = Math.floor(m / 60);
	m %= 60;
	var d = Math.floor(h / 24);
	h %= 24;
	console.log(new Date(Date.now()), Date.now(), countdownDate, countdownDate.getTime(), delta, d, h, m, s, ms);
});
