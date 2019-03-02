$( document ).ready(function() {
	var basic_url = "https://www.googleapis.com/books/v1/volumes?q=";
	//var public_key = "&key=AIzaSyCMMp3tKEmoNM81CEtQIruV4H5H7HjZMOE";
	var use_key = "";
	$("#search-clear").click(function(){
		$( "#search-form input" ).val("");
		$("#search-clear").hide();
	});
	$("#search-form input").keyup(function() {
		console.log("Key pressed on input");
		var text = $( "#search-form input" ).val();
		console.log("text: "+text);
		if (text.length == 0)
		{
			$("#search-clear").hide();
		}else
		{
			$("#search-clear").show();
		}
	});
    $( "#search-form" ).submit(function(e)
	{
		//alert("Ciao bel");
		var input_text = $( "#search-form input" ).val();
		if (input_text != "")
		{
			$("#error").hide();
			$("#loading").show();
			$("#nothing").hide();
			var compleateUrl = basic_url+input_text+use_key;
			console.log(compleateUrl);
			$.get(compleateUrl, function( data ) {
				console.log("Results"+data.totalItems);
				$("#loading").hide();
				var book_container = document.getElementById("results");
				book_container.innerHTML = "";
				data.items.forEach(book => {
					console.log(book.volumeInfo.title);
					// Nodo Book
					var bookNode = document.createElement("div"); 
					bookNode.classList.add("book","col-12","col-sm-12","col-lg-6");
					// Nodo contenitore Book
					var bookContainerNode = document.createElement("div"); 
					bookContainerNode.classList.add("book-container");
					// Nodo image Book
					var bookImageNode = document.createElement("div"); 
					bookImageNode.classList.add("book-image","d-none", "d-sm-block");
					bookImageNode.innerHTML = "<img src=\""+book.volumeInfo.imageLinks.smallThumbnail+"\" >";
					// Nodo Book background
					var bookBackgroundNode = document.createElement("div"); 
					bookBackgroundNode.classList.add("book-background");
					// Nodo Book info
					var bookInfoNode = document.createElement("div"); 
					bookInfoNode.classList.add("book-info");
					// Nodo Book title
					var bookTitleNode = document.createElement("div"); 
					bookTitleNode.classList.add("book-title");
					if (book.volumeInfo.title.length > 80)
					{
						bookTitleNode.innerHTML = book.volumeInfo.title.substring(0,80)+"...";
					}else
					{
						bookTitleNode.innerHTML = book.volumeInfo.title;
					}
					// Nodo Book by
					var bookByNode = document.createElement("div"); 
					bookByNode.classList.add("book-by");
					if (typeof book.volumeInfo.authors !== 'undefined')
					{
						bookByNode.innerHTML = "By: "+book.volumeInfo.authors[0];
					}else
					{
						bookByNode.innerHTML = "By: unknown";
					}
					// Nodo Book pub by
					var bookPubByNode = document.createElement("div"); 
					bookPubByNode.classList.add("book-pub-by");
					bookPubByNode.innerHTML = "Published By: "+book.volumeInfo.publisher;
					// Nodo Book link
					var bookLinkNode = document.createElement("div"); 
					bookLinkNode.classList.add("book-link");
					bookLinkNode.innerHTML = "<a href=\""+ book.volumeInfo.canonicalVolumeLink +"\" target=\"_blank\" class=\"btn\" role=\"button\">See this Book</a>";
					// Creo lista nodi
					bookInfoNode.appendChild(bookTitleNode);
					bookInfoNode.appendChild(bookByNode);
					bookInfoNode.appendChild(bookPubByNode);
					bookInfoNode.appendChild(bookLinkNode);
					bookContainerNode.appendChild(bookImageNode);
					bookContainerNode.appendChild(bookBackgroundNode);
					bookContainerNode.appendChild(bookInfoNode);
					bookNode.appendChild(bookContainerNode);
					//var nodeContent = "<div class=\"col-8\" ><div class=\"book-info\">"+book.volumeInfo.title+"</div><div>"
					//+"<a href=\""+ book.volumeInfo.canonicalVolumeLink +"\" target=\"_blank\" class=\"btn btn-info book-link\" role=\"button\">See this Book</a>"+"</div></div></div>";
					//nodeContent = "<div class=\"row book\" ><div class=\"col-4\" >"+imgHTML+"</div>"+nodeContent;
					//var textnode = document.createTextNode(book.volumeInfo.title);       
					//node.appendChild(textnode); 
					//node.innerHTML = nodeContent;                           
					book_container.appendChild(bookNode);
				});
			});
		}else
		{
			$("#error").show();
			var book_container = document.getElementById("results");
			book_container.innerHTML = "";
			console.log("Input vuoto!");
		}

		return false;
	});

});

function toggleTest()
{
	$("#results-test").toggle();
}
