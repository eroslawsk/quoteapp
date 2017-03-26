var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

$(document).ready(function(){
$.getJSON(url)
.done(displayQuote);
});

$('#btnNext').click(function(){
  $.getJSON(url)
    .done(displayQuote);
});

function displayQuote(data){
  $('#quoteDisplay').html(data.quoteText).hide().fadeIn('slow');
  
  if(data.quoteAuthor === ""){
    $('#authorDisplay').html("- Unknown").hide().fadeIn('slow');
  }
  else {
  $('#authorDisplay').html("- " + data.quoteAuthor).hide().fadeIn('slow'); 
    
}
}