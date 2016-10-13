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
			showResults(data.items);
			//console.log(data.items);
		});
	}

	function showResults(results){


		$.each(results, function(index, value){

			$(".name").append(value.user.display_name);
			$(".rep").append(value.user.reputation);
			$(".score").append(value.score);
			
			var temp = $('.templates .answerers').clone();
			
			var name = temp.find(".name");
			name.text(value.user.display_name);

		});	



			$(".hidden").show();
	}

	
});
	





