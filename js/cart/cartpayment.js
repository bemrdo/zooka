   (function() {
     $.ajaxSetup({
          cache: false,
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });

    $('.cart_quantity_input').on('change', function() {
          var id = $(this).attr('data-id')
          var qty =  $(this).val()
          $.ajax({
            type: "POST",
            url: '/payments/input' + '/' + id,
            data: {
              'quantity': qty,
            },
            success: function(data) {
              if(data['error'] !== undefined){
                  var text = data.error['quantity'].toString();
                  swal({title: text}).then((value) => {
                    location.reload();
                  });
                }else if(data['fail'] == 'qty'){
                 swal("Person cannot less than min person!")
                   .then((value) => {
                     location.reload();
                 });
              }else
                $("#cartdata").html(data);
            }
          });

      });

      $('.cart_quantity_up').on('click', function() {
          var id = $(this).attr('data-id')
          var qty =  $(this).attr('data-qty')
          $.ajax({
            type: "POST",
            url: '/payments/up' + '/' + id,
            data: {
              'quantity': qty,
            },
            success: function(data) {
              if(data['error'] !== undefined){
                var text = data.error['quantity'].toString();
                swal({title: text}).then((value) => {
                    location.reload();
                });
              }else
                $("#cartdata").html(data);
            }
          });

      });

    $('.cart_quantity_down').on('click', function() {
          var id = $(this).attr('data-id')
          var qty =  $(this).attr('data-qty')
          $.ajax({
            type: "POST",
            url: '/payments/down' + '/' + id,
            data: {
              'quantity': qty,
            },
            success: function(data) {
              if(data['success'] == true){
                swal("Person cannot less than min person!")
                .then((value) => {
                  location.reload();
                });
              }else if(data['success'] == false){
                swal("There must be 1 activity in the cart!","","error");
              }
              else if(data['error'] !== undefined){
                var text = data.error['quantity'].toString();
                swal({title: text}).then((value) => {
                    location.reload();
                });
              }else
                $("#cartdata").html(data);

            }
          });

      });
  })();
