jQuery.fn.replaceTag = function(newTag){
	var newElement = $("<" + newTag + "></" + newTag + ">");
	var attrs = this.get(0).attributes;
	for(var i=0;i<attrs.length;i++)
		newElement.attr(attrs[i].name, attrs[i].value);
	this.after(newElement).remove();
}
jQuery.fn.tagName = function(){return this.prop("tagName").toLowerCase();};
function startsWith(string, substr){
	return string.lastIndexOf(substr, 0) === 0;
}