var ALPHA_HIGH = 1.0, ALPHA_MEDIUM = 0.7, ALPHA_LOW = 0.4;
var NUM_IMAGES = window.slideshow_srcIcon.length;
$(document).ready(function(){
	var table = $("#link-table");
	for(var i=0;i<NUM_IMAGES;){
		var start=i;
		var row = $("<tr></tr>");
		for(;(i-start)<8 && i<NUM_IMAGES;i++){
			var img = $("<td data-index='" + i + "'><img src='" + window.slideshow_srcIcon[i] + "'/></td>");
			img.click(function(){
				fadeOut($(".selected"));
				fadeIn($(this));
			});
			img.mouseenter(function(){
				if(!$(this).hasClass("selected"))
					$(this).fadeTo("slow", ALPHA_MEDIUM);
			});
			img.mouseleave(function(){
				if(!$(this).hasClass("selected"))
					$(this).fadeTo("slow", ALPHA_LOW);
			});
			row.append(img);
		}
		table.append(row);
	}
	var imgs = $("#link-table td"), first = imgs.first();
	fadeOut(imgs.not(first));
	fadeIn(first);
});
function fadeIn(img){
	img.toggleClass("selected", true);
	img.fadeTo("slow", ALPHA_HIGH);
	$("#main-wrapper").fadeTo("fast", 0, function(){
		var ind = parseInt(img.attr("data-index"));
		var src = window.slideshow_srcMain[ind];
		if($("#main").tagName() == "img"){
			console.log("img");
			if(startsWith(src, "http")){
				$("#main").replaceTag("iframe");
				console.log("-->iframe");
			}
		}else{
			console.log("iframe");
			if(!startsWith(src, "http")){
				$("#main").replaceTag("img");
				console.log("-->img");
			}
		}
		$("#main").attr("src", src);
		$("#main-link").attr("href", window.slideshow_href[ind]);
		$("#caption").html(window.slideshow_captions[ind]);
		$("#main-wrapper").fadeTo("fast", 1);
	});
}
function fadeOut(img){
	img.toggleClass("selected", false);
	img.fadeTo("slow", ALPHA_LOW);
}
function ytIcon(id){return "https://img.youtube.com/vi/" + id + "/0.jpg";}
function ytEmbed(id){return "https://www.youtube.com/embed/" + id + "?autoplay=0";}
function vimeoIcon(id){
	var url = null;
	$.getJSON("https://vimeo.com/api/v2/video/" + id + ".json?callback=?", function(data){
		url = data[0].thumbnail_large;
	});
	return url;
}
function vimeoEmbed(id){return "https://player.vimeo.com/video/" + id;}
