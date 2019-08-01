$(document).ready(function(){
var input = document.getElementById("search");
var awesomplete = new Awesomplete(input);

$.ajaxSetup({ headers: { 'csrftoken' : '{{ csrf_token() }}' } });
  $("input[name='search']").on('keyup',function(){
  var value = $(this).val();
  if(value != "" && event.keyCode != '38' && event.keyCode != '40' && event.keyCode != '37' && event.keyCode != '39'){
    $.ajax({
      type : 'get',
      url : '/search/order',
      data:{'search':value},
        success:function(response){
          var len = response.length;
          var tampung = [];
          for( var i = 0; i<len; i++){
            var id = response[i]['id'];
            var name = response[i]['value'];
            tampung.push(name);
          }
          awesomplete.list = tampung;
        }
     });
  }

  if (event.keyCode === 13) {
      var query = document.getElementById("search").value;
      var _url =  "/admin/approve-item?search=";
      location.href = _url + encodeURIComponent(query).replace(/%20/g,'-');
    }

    $('#klik').on('click', function() {
      var query = document.getElementById("search").value;
      var _url =  "/admin/approve-item?search=";
      location.href = _url + encodeURIComponent(query).replace(/%20/g,'-');
    });

  })
});         
