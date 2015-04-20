/*!
 * @overview  Github.js
 *
 * @copyright (c) 2013 Goran Mandinic, Development Seed
 *            Github.js is freely distributable.
 *
 * @license   Licensed under MIT license
 *
 *            For all details and documentation:
 *            http://
 */
// Klikom na search button uzmi vrijednost userNamea
		$(document).ready(function(){
					$( "#srch" ).click(function() {					
						var userName = $("#username").val();
						$('.mydiv').hide();
						$('.loading').show();

				        function printGitHubCard() {
	                    var responseObj = JSON.parse(this.responseText);
	                       //console.log(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
						   //console.log(responseObj.name + " has an avatar @ " + responseObj.avatar_url + " url!");
						   // iscrtaj card s json podacima
						   $( ".media-left" ).empty(); // obrise podatke od ranije if any
						   $( ".media-body" ).empty(); // obrise podatke od ranije if any
					       
					       
						   $( ".media-left").append( " <a href="+responseObj.html_url+" target=_'blank'><img class='fixed_width img-rounded' src="+responseObj.avatar_url+" alt='GitHub avatar'></a> ");						
						   $( ".media-body").append( " <h4 class='media-heading'>"+responseObj.name+" <a class='btn btn-default pull-right' href="+responseObj.html_url+" target='_blank' role='button'>Follow</a> </h4> ");
						   $( ".media-body").append( " <h5 >@"+responseObj.login+"</h5> ");
						   $( ".media-body").append( " <table class= 'table table-bordered'><td> Repos: <strong>"+responseObj.public_repos+"</strong> </td><td>Gists: <strong>"+responseObj.public_gists+"</strong></td><td> Followers:<strong>" +responseObj.followers+ " </strong>   </td></table>");
						   
						   $('.mydiv').fadeIn();
						   $('.loading').hide();
	                    }

	                    var request = new XMLHttpRequest();
	                    request.onload = printGitHubCard;	                    
				        request.open('get', 'https://api.github.com/users/'+userName, true)
	                    request.send();
						
					
					}); // end od srch clicka	
		
		
					// FLICKR
					//$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?ids=52723107@N00&lang=en-us&format=json&jsoncallback=?", function(data){
					//$.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?", function(data){
					//$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c4471b9774deb717aa6c61f6b88e259a&user_id=mirko&format=json&nojsoncallback=1&api_sig=8818356105f1b5d1932fa33731f9e0c2", function(data){
					//$.getJSON("http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c4471b9774deb717aa6c61f6b88e259a&tags=flower&format=json&jsoncallback=?", function(data){
					//$.each(data.items, function(index, item){
					//$("<img/>").attr("src", item.media.m).appendTo("#flickr")
					//	.wrap("<a href='" + item.link + "'></a>");
					//});
					//});
					
					

                    $("#srchFlickr").click(function(){
					  $('#flickr').hide();
					  $('#flickr').empty();					  
					  $('.loadingFlickr').show();
                      $.getJSON("//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
                      {
                        tags: $("#searchTerm").val(),
                        tagmode: "any",
                        format: "json",
						 async: false
                      },
                      function(data) {
					    if (!jQuery.isEmptyObject(data.items))  {
							 $.each(data.items, function(i,item){
							 $( "#flickr").append( " <a href="+item.link+" target='_blank'><img src="+item.media.m+" class='img-thumbnail img-responsive'></img></a>");							
							if ( i == 20 ) return false;
						  });
					    }   
					    else {
						 $( "#flickr").append( " <p>Sorry no photos tagged '"+$("#searchTerm").val()+"' </p>");
						 // fancy no data response
						 //$( "#flickr").append( " <div class='alert alert-info alert-dismissible' ><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Sorry!</strong> No data tagged '"+$("#searchTerm").val()+"'.</div>");
					    }
                      });//end function
					  
					  $('.loadingFlickr').fadeOut();
					  $('#flickr').show();
                    });
					
				$("#srchTwtr").click(function(){
					  $('.loadingTwitter').show();
				});
				
				
				
			$(window).scroll(function(){				
				if ($(this).scrollTop() > 100) {
				$('.scrollToTop').fadeIn();
				} else {
				$('.scrollToTop').fadeOut();
				}
			});
				
				
				$('.scrollToTop').click(function(){
					$('html, body').animate({scrollTop : 0},800);
					return false;
				});
					
		
		});		