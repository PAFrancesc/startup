
$( document ).ready(function() {
  var source   = $("#entry-template").html();
  var compiled = dust.compile(source, "intro");
  dust.loadSource(compiled);
  dust.render("intro", profile, function(err, out) {
  $("#wrapper").html(out);
  });
});

