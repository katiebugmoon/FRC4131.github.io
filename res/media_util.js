function ytIcon(id){return "https://img.youtube.com/vi/" + id + "/0.jpg";}
function ytEmbed(id){return "https://www.youtube.com/embed/" + id + "?autoplay=0";}
function vimeoIcon(id){
	var url = null;
	console.log("Getting thumbnail for Vimeo #" + id);
	$.getJSON("https://vimeo.com/api/v2/video/" + id + ".json?callback=?", function(data){
		url = data[0].thumbnail_large;
		console.log("Vimeo URL (handler): " + url);
	});
	console.log("Vimeo URL (function): " + url);
	return url;
}
function vimeoEmbed(id){return "https://player.vimeo.com/video/" + id;}