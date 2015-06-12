var NUM_IMAGES = 7;
var ALPHA_HIGH = 1.0, ALPHA_MEDIUM = 0.7, ALPHA_LOW = 0.4;
$(document).ready(function(){
  var table = $("#link-table");
  for(var i=0;i<NUM_IMAGES;){
    var start=i;
    var row = $("<tr></tr>");
    for(;(i-start)<10 && i<NUM_IMAGES;i++){
      var img = $("<img src='img" + i + ".jpg'/>");
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
  $("#main").fadeTo("slow", 0, function(){
	$("#main").attr("src", img.attr("src"));
	$("#main").fadeTo("slow", 1);
  });
}
function fadeOut(img){
  img.toggleClass("selected", false);
  img.fadeTo("slow", ALPHA_LOW);
}
