(function() {                                                            
$.ajaxSetup({                                                         
    headers: {                                                        
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')  
    }                                                                 
});                                                                   
                                                                      
$('#order').click(function(e){  
   $.ajax({                                                           
     type: "POST",                                                    
     url: '/payments',                                                
     data: {                                                          
       fullname: $("#fullname").val(),                                
       phone: $("#phone").val(),                                      
       paymethod: $("#paymethod").val(),                              
       transport: $("#zooka-transport").val(),                        
       country: $("#country").val(),
       address: $("#address").val(),
       optional: $("#optional").val(),
       room: $("#room").val(),
     },                                                               
     success: function(data) {                                        
       if(data.error){                                                
         var text;                                                    
         if(data.error['fullname'])                                   
           text = data.error['fullname'].toString();                  
         else if(data.error['phone'])                                 
           text = data.error['phone'].toString();                     
         else if(data.error['country'])                             
           text = data.error['country'].toString();                 
         else if(data.error['paymethod'])                             
           text = data.error['paymethod'].toString();                 
         else if(data.error['address'])                             
           text = data.error['address'].toString();                 
         else if(data.error['optional'])                             
           text = data.error['optional'].toString();                 
         else if(data.error['room'])                             
           text = data.error['room'].toString();                 
         else                                                         
           text = data.error['transport'].toString();                 
         swal({title: text});                                         
       }else if($("#paymethod").val() === '3'){
        jQuery(document).ready(function(){
          e.preventDefault();
          $.ajaxSetup({
             cache: false,
             headers: {
                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
             }
         });
          jQuery.ajax({
            url: "/payments/save",
             method: 'post',
             data: {
               fullname: $("#fullname").val(),
               phone: $("#phone").val(),
               paymethod: $("#paymethod").val(),
               country: $("#country").val(),
               transport: $("#zooka-transport").val(),
               address: $("#address").val(),
               optional: $("#optional").val(),
               room: $("#room").val(),
               amount:0,
               payment_type:'onsite',
             },
             success: function(result){
             if(result['success'] == true)
               window.location.href = '/account/show-orders?status=pending'
          }});
        });
       }else{                                                          
         snap.pay(data.snap_token, {                                  
           // Optional                                                
           onSuccess: function (result) {                             
            jQuery(document).ready(function(){
              e.preventDefault();
              $.ajaxSetup({
                 cache: false,
                 headers: {
                     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                 }
             });
              jQuery.ajax({
                url: "/payments/save",
                 method: 'post',
                 data: {
                   fullname: $("#fullname").val(),
                   phone: $("#phone").val(),
                   paymethod: $("#paymethod").val(),
                   country: $("#country").val(),
                   transport: $("#zooka-transport").val(),
                   address: $("#address").val(),
                   optional: $("#optional").val(),
                   room: $("#room").val(),
                   amount:result['gross_amount'],
                   order_id:result['order_id'],
                   payment_type:result['payment_type'],
                   masked_card:result['masked_card'],
                   card_type:result['card_type'],
                 },
                 success: function(result){
                 if(result['success'] == true)
                   window.location.href = '/account/show-orders?status=success'
              }});
            });

           },                                                         
           // Optional                                                
           onPending: function (result) {                             
            var bank_value,va_number_value;
            if(result['permata_va_number'] !== undefined){
             bank_value = 'permata';
             va_number_value = result['permata_va_number'];
            }
            else if(result['bill_key'] !== undefined){
             bank_value = 'mandiri';
             va_number_value = result['bill_key'];
            }
            else{
             bank_value = result['va_numbers']['0']['bank'];
             va_number_value = result['va_numbers']['0']['va_number'];
            }

            jQuery(document).ready(function(){
              e.preventDefault();
              $.ajaxSetup({
                 cache: false,
                 headers: {
                     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                 }
             });
              jQuery.ajax({
                url: "/payments/save",
                 method: 'post',
                 data: {
                   fullname: $("#fullname").val(),                                
                   phone: $("#phone").val(),                                      
                   paymethod: $("#paymethod").val(),                              
                   country: $("#country").val(),
                   transport: $("#zooka-transport").val(),                        
                   address: $("#address").val(),
                   optional: $("#optional").val(),
                   room: $("#room").val(),
                   amount:result['gross_amount'],
                   order_id:result['order_id'],
                   payment_type:result['payment_type'],
                   pdf_url:result['pdf_url'],
                   bank:bank_value,
                   va_number:va_number_value,
                 },
                 success: function(result){
                 if(result['success'] == true)
                   window.location.href = '/account/show-orders?status=pending'
              }});
            });
           },                                                         
           // Optional                                                
           onError: function (result) {                               
               location.reload();                                     
           }                                                          
         });                                                          
       }                                                              
                                                                      
     }                                                                
   });                                                                
 });                                                                    
                                                                        
})();                                                                    

$('#zooka-transport').on('change', function () {
    var style = this.value == 2 ? 'none' : 'block';
    document.getElementById('zooka-trans').style.display = style;
    document.getElementById('zooka-room').style.display = style;
});

$(document).ready(function() {
  var dp = sessionStorage.getItem("dp");
  var onsite = sessionStorage.getItem("onsite");
  if(dp){
    $("#dp_payment").css({"display":"block","margin-top":"5%"});
    $("#onsite_payment").css("display","none");
  }
  if(onsite){
    $("#onsite_payment").css({"display":"block","margin-top":"5%"});
    $("#dp_payment").css("display","none");
  }

});

$(document).on('change','#paymethod',function(){
  var pay = $("#paymethod").val();
  if(pay == "1"){
    $("#dp_payment").css("display","none");
    $("#onsite_payment").css("display","none");
    sessionStorage.removeItem("dp");
    sessionStorage.removeItem("onsite");
  }
  if(pay == "2"){
    $("#dp_payment").css({"display":"block","margin-top":"5%"});
    $("#onsite_payment").css("display","none");
    sessionStorage.setItem("dp", "true");
    sessionStorage.removeItem("onsite");
  }
  if(pay == "3"){
    $("#onsite_payment").css({"display":"block","margin-top":"5%"});
    $("#dp_payment").css("display","none");
    sessionStorage.removeItem("dp");
    sessionStorage.setItem("onsite", "true");
  }
});

