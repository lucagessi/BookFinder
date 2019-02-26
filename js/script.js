$( document ).ready(function() {
	var basic_url = "https://www.googleapis.com/books/v1/volumes?q=";
	//var public_key = "&key=AIzaSyCMMp3tKEmoNM81CEtQIruV4H5H7HjZMOE";
	var use_key = "";
    $( "#search-form" ).submit(function(e)
	{
		//alert("Ciao bel");
		var input_text = $( "#search-form input" ).val();
		if (input_text != "")
		{
			var compleateUrl = basic_url+input_text+use_key;
			console.log(compleateUrl);
			$.get(compleateUrl, function( data ) {
				//$( ".result" ).html( data );
				alert( "Load was performed." );
			});
			/*.done(function() {
				alert( "second success" );
			  })
			  .fail(function() {
				alert( "error" );
			  })
			  .always(function() {
				alert( "finished" );
			  });*/
		}else
		{
			console.log("Input vuoto!");
		}

		return false;
	});

});
