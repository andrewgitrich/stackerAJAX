$(document).ready(function(){

	$(".inspiration-getter").submit(function(event){
	event.preventDefault();
	$(".results").html("");

	var searchTerm = $("#query").val();
	getRequest(searchTerm);
});


	function getRequest(searchTerm){
		var params = {
			'tag': searchTerm,
			};

			var url = "http://api.stackexchange.com/2.2/tags/" + searchTerm + "/top-answerers/all_time?site=stackoverflow";

			$.getJSON(url, params, function(data){
			})

		.done(function(data){
			 $('.search-results').html(data.items.length + ' results for <strong>' + params.tag + '</strong>');

			  for (var i = 0; i < data.items.length; i++) {
                var question = showResults(data.items[i]);
                $('.results').append(question);
           		 }
		});	
	}

	var showResults = function(question) {

	    var result = $('.templates .answerers').clone();

	    var name = result.find('.name a');
	    name.attr('href', question.user.link);
	    name.text(question.user.display_name);
	    console.log(question.user.display_name);

	    var reputation = result.find('.rep');
	    reputation.text(question.user.reputation);

	    var score = result.find('.score');
	    score.text(question.score);

	    return result;
	};
});
	





