$(document).ready(function(){

  var host = window.location.origin;
  socket = io.connect(host);

  var $servo = $('.servo');
  var $pointer = $servo.find('.pointer');

  socket.on('angle', function(data){
    console.log('angle: ', data);
    
    var angle = data - 90;
    var styles = '-webkit-transform: rotate('+angle+'deg); -moz-transform: rotate('+angle+'deg); -ms-transform: rotate('+angle+'deg); transform: rotate('+angle+'deg);'
    $pointer.attr('style', styles);
    $pointer.text(data);
  });

});
