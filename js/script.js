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
				console.log("Results"+data.totalItems);
				//$("#results").html("<div class=\"book-result col col-centered\">"+ data.items +"</div>")
				var book_container = document.getElementById("results");
				book_container.innerHTML = "";
				data.items.forEach(book => {
					console.log(book.volumeInfo.title);
					var node = document.createElement("div");
					node.classList.add("col-sm-6");     
					var imgLink = book.volumeInfo.imageLinks.smallThumbnail;
					var imgHTML = "<img src=\""+imgLink+"\" >";
					var nodeContent = "<div class=\"col-8\" ><div class=\"book-info\">"+book.volumeInfo.title+"</div><div>"
					+"<a href=\""+ book.volumeInfo.canonicalVolumeLink +"\" target=\"_blank\" class=\"btn btn-info book-link\" role=\"button\">See this Book</a>"+"</div></div></div>";
					nodeContent = "<div class=\"row book\" ><div class=\"col-4\" >"+imgHTML+"</div>"+nodeContent;
					//var textnode = document.createTextNode(book.volumeInfo.title);       
					//node.appendChild(textnode); 
					node.innerHTML = nodeContent;                           
					book_container.appendChild(node);
				});
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
