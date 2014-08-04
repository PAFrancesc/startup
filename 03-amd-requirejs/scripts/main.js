define('main',["Movie", "Director", "jquery-2.1.1"],  function (Movie, Director) {
  var rocky = new Movie ("Rocky V", 1995, 1323); 
  var silvester = new Director ("Stallone");
  
  silvester.set('quotes', ['Cast is everything.', 'Do what ...', "you want..."]);
  rocky.set('director', silvester);
  
  rocky.get('director').speak();
 
  $("#content").append('<h2 id="title">Film: ' + rocky.get('title') +', Director: ' + silvester.get('name')+ ': </h2>');
  $.each( rocky.get('director').get('quotes'), function(l, val ) {
    $("#content").append('<p id="quote">'+val+'</p>');
  });

});