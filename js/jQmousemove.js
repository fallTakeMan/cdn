$(document).bind('mousemove touchmove',function(e) {
    e.preventDefault();
    var drawSize = 10;
    var drawType = '❤';
    var floatType = 'floatOne';
    var xPos = e.originalEvent.pageX;
    var yPos = e.originalEvent.pageY;
    
    $('body').append('<div class="drawLove" style=" font-size:'+drawSize+'px;left:'+xPos+'px;top:'+yPos+'px;-webkit-animation:'+floatType+' .9s 1;-moz-animation:'+floatType+' .9s 1;color:#EE3F4D;">'+drawType+'</div>');
  
    $('.drawLove').each(function() {
      var div = $(this);
      setTimeout(function() {$(div).remove();},500);
    });
});