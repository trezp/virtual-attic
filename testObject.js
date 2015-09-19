
var memoryObject = {
	"name":"Guitar",
	"memory": "My very first guitar teacher gave me this crappy guitar held together by duct tape",
	"tags": ["high school", "music", "stoner days"],
	"year": 1999
}

$(document).ready(function(){
	$("#memoryInputForm").on('submit', function(event){
		event.preventDefault();
		var title = $('#title').val();
		var story = $('#story').val();
		var date = $('#date').val();

		var makeMemory = function(aTitle, aStory, aDate){
			var newMemory = '<div class="memory-block">'+ '<h6>Date:' + aDate + '</h6>' + '<h1>' + aTitle + '</h1>' + '<p>' + aStory + '</p></div>';
			return newMemory;
		}
		
		var output = makeMemory(title,story, date);

		$('body').append(output);

		$("#title, #story, #date").val('');	
		
	});

	$("#memorySubmit").on('click', function(){

	});
	
});
//MemoryMaker.makeMemoryObject(memoryObject);