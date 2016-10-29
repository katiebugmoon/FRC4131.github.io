var countdownTarget = 'Kickoff 2017';
var countdownDate = new Date(2017, 1, 7);
$(function(){
	var now = new Date();
	var delta = now.valueOf() - countdownDate.valueOf();
	alert(delta);
});
