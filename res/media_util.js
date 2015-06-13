function ytIcon(id){return "https://img.youtube.com/vi/" + id + "/0.jpg";}
function ytEmbed(id){return "https://www.youtube.com/embed/" + id + "?autoplay=0";}
function vimeoIcon(id){
	console.log("Getting thumbnail for Vimeo #" + id);
	return $.getJSON("https://vimeo.com/api/v2/video/" + id + ".json?callback=?").then(function(data){
		return data[0].thumbnail_large;
	});
}
function vimeoEmbed(id){return "https://player.vimeo.com/video/" + id;}