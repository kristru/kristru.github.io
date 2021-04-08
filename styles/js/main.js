$(document).ready(function(){
  console.log('testing Jquery library')
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal6').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
});
/* setTimeout(function start (){

  $('.bar').each(function(i){
    var $bar = $(this);
    $(this).append('<span class="count"></span>')
    setTimeout(function(){
      $bar.css('width', $bar.attr('data-percent'));
    }, i*100);
  });

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).parent('.bar').attr('data-percent')
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now) +'%');
        }
    });
});
}, 500)
*/
