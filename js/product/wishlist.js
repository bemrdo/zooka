  $(document).on('click touchstart','.btn-love',function(){
    var _this = $(this);

    var _url =  "/wishlist/" + _this.attr('data-model-id');

    $.get(_url, function(data){
        if(data == '0'){
          swal("login dulu gan")
          .then((value) => {
          window.location.href = '/login';
          });
        } else if(data == '1'){
        swal("yeay berhasil di tambah")
        _this.removeClass('btn-love').addClass('btn-unlove');
        $("#love").removeClass('wishlist-out').addClass('wishlist-in');
        }
    });

});

$(document).on('click touchstart','.btn-unlove',function(){
    var _this = $(this);
    var _url =  "/unlove/" + _this.attr('data-model-id');

    $.get(_url, function(data){
        if(data == '0'){
        swal("yeay berhasil di hapus")
        _this.removeClass('btn-unlove').addClass('btn-love');
        $("#love").removeClass('wishlist-in').addClass('wishlist-out');
      }
    });

 });

