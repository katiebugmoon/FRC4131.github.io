function ytIcon(id){return "https://img.youtube.com/vi/" + id + "/0.jpg";}
function ytEmbed(id){return "https://www.youtube.com/embed/" + id + "?autoplay=0";}
function vimeoIcon(id){return "_VIMEO" + id;}//This will be hunted down later by getVimeoIcons().
function vimeoEmbed(id){return "https://player.vimeo.com/video/" + id;}
function getVimeoIcons(){
	console.log("Finding Vimeo thumbnails");
	$("[src|='_VIMEO']").each(function(ind, element){
		console.log("Thumbnail found #" + ind);
		var id = $(element).attr("id");
		var vid = id.substring(6, id.length);
		console.log("Finding Vimeo thumbnail " + vid);
		$.getJSON('http://vimeo.com/api/v2/video/' + vid + '.json?callback=?', function(data){
			var url = data[0].thumbnail_large;
			console.log("URL=" + url);
			$(element).attr("src", url);
		});
	});
}
