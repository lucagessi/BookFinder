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
			$.get(compleateUrl, function( data ) {
				//$( ".result" ).html( data );
				alert( "Load was performed." );
			});
		}else
		{
			console.log("Input vuoto!");
		}

		return false;
	});

	jQuery.get()
});
