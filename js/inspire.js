$(document).ready(function(){

	$(".inspiration-getter").submit(function(event){
event.preventDefault();
var searchTerm = $("#query").val();
	getRequest(searchTerm);
});

	function getRequest(searchTerm){
		var params = {
			'tag': searchTerm,
			};
		
			var url = "http://api.stackexchange.com/2.2/tags/" + searchTerm + "/top-answerers/all_time?site=stackoverflow";

		$.getJSON(url, params, function(data){
		//console.log(data.items);
			showResults(data.items);
		});
	}

	function showResults(results){
		$.each(results, function(index, value){
			var name = value.user.display_name;
			var rep = value.user.reputation;
			console.log(name);
		});
		
	}



});
	





