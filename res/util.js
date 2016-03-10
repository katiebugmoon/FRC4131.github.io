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

//Setup: <input class='copy' type='text' readonly value='This is the text to copy'/> <span class='copybtn'>(Copy text)</span>
$(document).ready(function(){
	console.log('Hello!');
	$('.copy').each(function(){//Resize text fields to match their contents
		console.log(this);
		console.log($(this).val());
		$(this).attr('size', $(this).val().length);
	});
	$('.copybtn').on('click', function(event){//Copy buttons
		$(this).prev('.copy').get(0).select();//Get the text field, and select all of the text it contains
		var result = document.execCommand('copy');//Simulate a Ctrl-C (copies the selected text, which is set in the previous line)
		if(result) console.log('Copied successfully');
		else console.log('Copy failed');
	});
});
