$('.cari').select2({                                 
  placeholder: 'Search Country...',                  
  ajax: {
    url: '/search/countries',                        
    dataType: 'json',                                
    delay: 250,                                      
    processResults: function (data) {                
      return {
        results:  $.map(data, function (item) {      
          return {
            text: item.country_name,                 
            id: item.id                              
          }
        }) 
      };                                             
    },                                               
    cache: true                                      
  }
});                                                  
