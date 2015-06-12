var ALPHA_HIGH = 1.0, ALPHA_MEDIUM = 0.7, ALPHA_LOW = 0.4;
var captions = ["Caught Alex by surprise!", "Sydney was heads-down with business cards all day.", "A prototype for the new driver station.", "Austin was CAD'ing it up.", "The Jacobsons work on field elements.", "Jill and Emily were essential to maintaining morale through build season.", "Ian and Doug review ideas for the robot.", "Click the image to read some quotes from build season.", "This robot was borrowed from the Issaquah Robotics Society so we could test out a robot with Mecanum drive. This was the first year we tried using Mecanum drive, and it was because of the success we had with this robot.", "A time-lapse of build season day 8.", "A time-lapse of build season day 9."];
var srcIcon = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", ytIcon("vigERTgk39w"), ytIcon("yslYLHzRTzE"), ytIcon("gdnHLOKniQw")];
var srcMain = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", ytEmbed("vigERTgk39w"), ytEmbed("yslYLHzRTzE"), ytEmbed("gdnHLOKniQw")];
var href = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "../quotes", "", "", ""];//No point to linking videos: clicking just pauses.
var NUM_IMAGES = srcIcon.length;
$(document).ready(function(){
	var table = $("#link-table");
	for(var i=0;i<NUM_IMAGES;){
		var start=i;
		var row = $("<tr></tr>");
		for(;(i-start)<8 && i<NUM_IMAGES;i++){
			var img = $("<td data-index='" + i + "'><img src='" + srcIcon[i] + "'/></td>");
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
		var src = srcMain[ind];
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
		$("#main-link").attr("href", href[ind]);
		$("#caption").text(captions[ind]);
		$("#main-wrapper").fadeTo("fast", 1);
	});
}
function fadeOut(img){
	img.toggleClass("selected", false);
	img.fadeTo("slow", ALPHA_LOW);
}
function ytIcon(id){return "https://img.youtube.com/vi/" + id + "/0.jpg";}
function ytEmbed(id){return "https://www.youtube.com/embed/" + id + "?autoplay=0";}
