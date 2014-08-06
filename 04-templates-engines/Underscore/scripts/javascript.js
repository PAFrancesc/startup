
$( document ).ready(function() {
  var tableTemplate = $("#information").html();
  console.log(profile);
  $("body").html(_.template(tableTemplate,profile));
});