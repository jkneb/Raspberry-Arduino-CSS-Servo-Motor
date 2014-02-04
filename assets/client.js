(function(){

  var host = window.location.origin;
  socket = io.connect(host);

  var servo = document.querySelector('.servo');
  var pointer = document.querySelector('.pointer');

  socket.on('angle', function(data){
    console.log('angle: ', data);

    var angle = data - 90;
    var styles = '-webkit-transform: rotate('+angle+'deg); transform: rotate('+angle+'deg);'
    pointer.setAttribute('style', styles);
    pointer.querySelector('.value').innerHTML = '0';
  });

}());