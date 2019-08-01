 jQuery(document).ready(function(){
      jQuery('#comment').click(function(e){
         e.preventDefault();
         $.ajaxSetup({
            cache: false,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
         jQuery.ajax({
           url: "/product-comment/"+$("#product_id").val(),
            method: 'post',
            data: {
               subject: jQuery('#subject').val(),
            },
            success: function(result){
              if(result['success'] != true){
                var text = result.success['subject'].toString();
                swal({
                  title: text,
                });
              }
              else{
                sessionStorage.setItem("reloading", "true");
                swal("berhasil comment")
                .then((value) => {
                      document.location.reload();
                });
              }
          }});
      });
 });

 jQuery(document).ready(function(){
      jQuery('.delete_comment').click(function(e){
         e.preventDefault();
         $.ajaxSetup({
            cache: false,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
         jQuery.ajax({
           url: "/product-comment/"+$(this).data('delcom'),
            method: 'delete',
            data: {
               id: $(this).data('delcom'),
            },
            success: function(result){
                sessionStorage.setItem("reloading", "true");
                swal("berhasil delete comment")
                .then((value) => {
                      document.location.reload();
                });
          }});
      });
 });

 jQuery(document).ready(function(){
      jQuery('.delete_replies').click(function(e){
         e.preventDefault();
         $.ajaxSetup({
            cache: false,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
         jQuery.ajax({
           url: "/product-replies/"+$(this).data('delrep'),
            method: 'delete',
            data: {
               id: $(this).data('delrep'),
            },
            success: function(result){
                sessionStorage.setItem("reloading", "true");
                swal("berhasil delete replies")
                .then((value) => {
                      document.location.reload();
                });
          }});
      });
 });

$('.show_more').click(function () {
  var number = $(this).data('more');
  var text = "#replies"+number;
  if($(this).text() === 'Show more'){
    $(this).text('Show less')
    $(text).removeClass("is-hidden");
  }
  else{
    $(this).text('Show more');
    $(text).addClass("is-hidden");
  }
});

$('.repliesButton').click(function () {
  sessionStorage.setItem("reloading", "true");
  var number = $(this).data('repbut');
  var text = "#form"+number;
  sessionStorage.setItem("form-replies", text);
});

$('.repliescol').click(function () {
  var number = $(this).data('option');
  var text = "#form"+number;
  $(text).removeClass("is-hidden");
});

$(".pagination-next").click(function(){sessionStorage.setItem("reloading", "true");});
$(".pagination-link").click(function(){sessionStorage.setItem("reloading", "true");});
$(".pagination-previous").click(function(){sessionStorage.setItem("reloading", "true");});
$(".edit_comment").click(function(){sessionStorage.setItem("reloading", "true");});
$(".edit_replies").click(function(){sessionStorage.setItem("reloading", "true");});

$( document ).ready(function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        $(sessionStorage.getItem("form-replies")).removeClass("is-hidden");
        sessionStorage.removeItem("form-replies");
        if ($(window).width() < 720)
          window.scrollTo(0, 1580);
        else
          window.scrollTo(0, 1130);
    }
})
