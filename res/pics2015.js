var NUM_IMAGES = 7;
$(document).ready(function(){
  var table = $("#link-table");
  for(var i=0;i<NUM_IMAGES;){
    var start=i;
    var row = $("<tr></tr>");
    for(;(i-start)<4 && i<NUM_IMAGES;i++){
      row.append($("<td><img src='img" + i + ".jpg'/></td>"));
    }
    table.append(row);
  }
});
