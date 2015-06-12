var NUM_IMAGES = 7;
console.log("2015 Pictures JS loaded");
$(document).ready(function(){
  console.log("2015 Pictures JS running");
  var table = $("link-table");
  for(var i=0;i<NUM_IMAGES;){
    var start=i;
    var row = $("<tr></tr>");
    for(;(i-start)<4 && i<NUM_IMAGES;i++){
      row.append($("<td><img src='img" + i + ".jpg'/></td>"));
    }
    table.append(row);
  }
});
