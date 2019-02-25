$( document ).ready(function() {
	var basic_url = "https://www.googleapis.com/books/v1/volumes?q=";
	var public_key = "&key=AIzaSyCMMp3tKEmoNM81CEtQIruV4H5H7HjZMOE";
    $( "#search-form" ).submit(function(e)
	{
		//alert("Ciao bel");
		var txt = $( "#search-form input" ).val();
		if (txt != "")
		{
			var compleateUrl = basic_url+txt+public_key;
			console.log(compleateUrl);
			$.get("ajax/test.html", function( data ) {
				//$( ".result" ).html( data );
				alert( "Load was performed." );
			}).done(function() {
			    alert( "second success" );
			  })
			  .fail(function() {
			    alert( "error" );
			  })
			  .always(function() {
			    alert( "finished" );
			  });
		}else
		{
			console.log("Input vuoto!");
		}

		return false;
	});

	jQuery.get()
});
