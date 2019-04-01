// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  $.ajax({
      url:"https://api.giphy.com/v1/gifs/search?q=octopus&rating=pg&api_key=dc6zaTOxFJmzC",
      method:"GET",
      success: function(response){
        var index= Math.floor(Math.random()*response.data.length);
          $("#img").html("<img src= " + response.data[index].images.fixed_width.url + ">");
      
        
      }
      });
  
  
});
