$(document).ready(function(){
 $('#ex1').zoom();
});

$('#thumbs .thumb').click(function(){
    $('.big-image').attr('src',$(this).attr('src'));
    $('.zoomImg').attr('src',$(this).attr('src'));
});

if ($(window).width() < 720) {
 $( ".zoom" ).removeAttr("id");

}
$("#thumbs .thumb-play").click(function() {
  $("#modal_youtube").addClass("is-active");
});

$(".modal-close").click(function() {
   $("#modal_youtube").removeClass("is-active");
   $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});
$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
     $('#modal_youtube').removeClass("is-active");
     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  }
});
