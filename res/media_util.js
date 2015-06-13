function ytIcon(id){return "https://img.youtube.com/vi/" + id + "/0.jpg";}
function ytEmbed(id){return "https://www.youtube.com/embed/" + id + "?autoplay=0";}
function vimeoIcon(id){return "_VIMEO" + id;}
function vimeoEmbed(id){return "https://player.vimeo.com/video/" + id;}
function getVimeoIcons(){
	var imgs = $("[src|=_VIMEO]");
	imgs.each(function(ind, element){
		var id = $(element).attr("id");
		var vid = id.substring(6, id.length);
		$.getJSON('http://vimeo.com/api/v2/video/' + vid + '.json?callback=?', function(data){
			$(element).attr("src", data[0].thumbnail_large);
		});
	});
}
