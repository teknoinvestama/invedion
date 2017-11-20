( function( $ ) {	

 $( '#toggle-menu' ).on( 'touchstart click', function(e) {
  e.preventDefault();  
 
  var $body = $( 'body' ),
      $page = $( '#page' ),
      $menu = $( '#menu' ),
 
      
      transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';
 

  $body.addClass( 'animating' );
 
 
  if ( $body.hasClass( 'menu-visible' ) ) {
   $body.addClass( 'right' );
  } else {
   $body.addClass( 'left' );
  }
  

  $page.on( transitionEnd, function() {
   $body
    .removeClass( 'animating left right' )
    .toggleClass( 'menu-visible' );
 
   $page.off( transitionEnd );
  } );
 } );
} )( jQuery );