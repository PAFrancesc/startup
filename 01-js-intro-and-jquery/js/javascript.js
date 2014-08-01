$( document ).ready(function() {
  
  $( "#seccion" ).css({
    background: 'grey',
    width: '200px',
    height: '200px'
  });

  var hid=$('<input/>').attr({
                      type: "hidden",
                      value: 'Hello World'
                      });
  $("#seccion").append(hid); 

  $("#seccion").fadeIn(1000,function(){
    $("#seccion").append('<input type="text" id="field"/>').addClass("alias");
    $("#field").focus();
  });
  

  var bot1=$('<input/>').attr({
                      type: "button",
                      id: "bot1",
                      value: 'CALL'
                      });
  $("#seccion").append(bot1); 


  $("#bot1").click(function(){
  $.get("http://bootcamp.aws.af.cm/welcome/" + $('#field').val() ,

  function(response){
  $("#seccion").append('<h2>'+response.response+'</h2>'); 

    });
  });
  $.ajax({
      url: 'http://tweetproxy.ap01.aws.af.cm/search?q=html5',
      dataType: 'jsonp',
      success: function(data){
        var text = '';
        var len = data.statuses.length;
        for(var i=0;i<len;i++){
          twitterEntry = data.statuses[i];
          console.log(twitterEntry);
          $("#twitter").append('<article id="twit"><img src="'+ twitterEntry.user.profile_image_url +'" /><p><strong>' + twitterEntry.user.name + '</strong><p/><p>'+ twitterEntry.text +' <p/><article/>');
      }}
  });    
});