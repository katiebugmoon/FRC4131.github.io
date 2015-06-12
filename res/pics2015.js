var ALPHA_HIGH = 1.0, ALPHA_MEDIUM = 0.7, ALPHA_LOW = 0.4;
var NUM_IMAGES = 8;
var captions = ["Caught Alex by surprise!", "Sydney was heads-down with business cards all day.", "A prototype for the new driver station.", "Austin was CAD'ing it up.", "The Jacobsons work on field elements.", "Jill and Emily were essential to maintaining morale through build season.", "Ian and Doug review ideas for the robot.", "Build Season Quotes"];
var src = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"];
var href = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "../quotes"];
$(document).ready(function(){
  var table = $("#link-table");
  for(var i=0;i<NUM_IMAGES;){
    var start=i;
    var row = $("<tr></tr>");
    for(;(i-start)<10 && i<NUM_IMAGES;i++){
      var img = $("<img src='" + src[i] + "' data-index='" + i + "'/>");
      img.click(function(){
        fadeOut($(".selected"));
        fadeIn($(this));
      });
      img.mouseenter(function(){
        if(!$(this).hasClass("selected"))
          $(this).fadeTo("slow", ALPHA_MEDIUM);
      });
      img.mouseleave(function(){
        if($(this).hasClass("selected"))
          $(this).fadeTo("slow", ALPHA_HIGH);
        else
        $(this).fadeTo("slow", ALPHA_LOW);
      })
      var cell = $("<td></td>");
      cell.append(img);
      row.append(cell);
    }
    table.append(row);
  }
  var imgs = $("#link-table img"), first = imgs.first();
  fadeOut(imgs.not(first));
  fadeIn(first);
});
function fadeIn(img){
  img.toggleClass("selected", true);
  img.fadeTo("slow", ALPHA_HIGH);
  $("#main-wrapper").fadeTo("fast", 0, function(){
	$("#main").attr("src", img.attr("src"));
  $("#main-link").attr("href", href[parseInt($(".selected").attr("data-index"))]);
	$("#caption").text(captions[parseInt($(".selected").attr("data-index"))]);
	$("#main-wrapper").fadeTo("fast", 1);
  });
}
function fadeOut(img){
  img.toggleClass("selected", false);
  img.fadeTo("slow", ALPHA_LOW);
}
