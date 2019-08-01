jQuery(document).ready(function(){
  jQuery('.tandai').click(function(e){
    e.preventDefault();
    $.ajaxSetup({
     cache: false,
     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
   });
    jQuery.ajax({
     url: "/account/seen-notif",
     method: 'put',
     success: function(data){
       if(!data['success']){
          swal('notif sudah semua di tandai!');
       }else{
       swal("notif berhasil di tandai")
       .then((value) => {                                           
           document.location.reload();                            
        }); 
       }
     }});
  });
});

