
$( document ).ready(function() {
  $( "#seccion" ).css({
    background: 'grey',
    width: '200px',
    height: '200px'
  });

  $("#seccion").fadeIn(1000,function(){
    $("#seccion").append('<input type="text" id="field"/>').addClass("alias");
    $("#field").focus();
  });

  $("#bot1").click(function(){
  $.get("http://bootcamp.aws.af.cm/welcome/tunombre",function(response){
    $("#bottext").text(response.response);
  });
});
});





