
$( document ).ready(function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  Handlebars.registerHelper('actualPosition', function(positions) {
    var x;
	$.each(positions, function( index, value ) {
      if (value.endDate == "today" ) { 
        x = value.title; 
      }
    });
    return x;
  });

  Handlebars.registerHelper('actualCompany', function(positions) {
	var x;
	$.each(positions, function( index, value ) {
	  if (value.endDate == "today" ) { 
        x = value.company.name; 
	  }
    });
	return x;
  });

  Handlebars.registerHelper('lastCompany', function(positions) {
    var x, y;

    $.each(positions, function( index, value ) {
      if (value.lastJob) { 
        x = value.company.name; 
      }
    });
    return x;
  });
  
  $("body").html(template(profile));
});

