jQuery(document).ready(function(){
   jQuery('#addtocart').click(function(e){
    e.preventDefault();
    $.ajaxSetup({
       cache: false,
       headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
   });
    jQuery.ajax({
      url: "/cart",
       method: 'post',
       data: {
         id: $("#id").val(),
         qty: $("#qty").val(),
         date: $("#date").val(),
         current_date: $("#current_date").val(),
         time: $("#time").val(),
         current_time: $("#current_time").val(),
       },
       success: function(result){
         if(result.success['qty'] && result['success'] != true){
           var text = result.success['qty'].toString();
           swal({
             title: text,
           });
         }
         if(result['success'] == 'full')
           swal('Booking date is full!');
         if(result['success'] == 'day')
           swal('You can booking tomorrow!');
         if(result['success'] == 'person')
           swal('Upss what wrong!');
         if(result['success'] == 'duplicate')
           swal('Activity already exists!');
         if(result['success'] == true){
           sessionStorage.setItem("cart", "true");
           document.location.reload();
         }
     }});
   });
});

$('.delete').click(function () {$("#modal_cart").removeClass("is-active");});
window.onload = function() {                                         
    var cart = sessionStorage.getItem("cart");                       
    if (cart) {                                                      
        sessionStorage.removeItem("cart");                           
        $("#modal_cart").addClass("is-active");
    }                                                                
}                                                                    

