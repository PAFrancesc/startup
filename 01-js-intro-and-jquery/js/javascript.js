
$( document ).ready(function() {
  console.log( 'ready!' );
});



if ( $( 'input' ).length > 0 ) {
  $( '#seccion' ).css({
    background: 'black',
    color: 'white',
  });

  $( '#seccion' ).fadeIn(1000);
}


$ ( '#seccion' ).append( '<input type="text" class="alias"/>' );
