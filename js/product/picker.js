const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var input = $( '#picker_inline_fixed' ).pickadate({                                                                       
dateMin: true,                                                                                                            
today: false,                                                                                                             
clear: false,                                                                                                             
onStart: function() {                                                                                                     
    var date = new Date()                                                                                                 
    this.setDate( date.getFullYear(), date.getMonth() + 1, date.getDate() )                                               
    $("#current_date").val(date.getDate()+' '+monthNames[(date.getMonth())]+','+date.getFullYear());
},                                                                                                                        
onOpen: function() {scrollPageTo( this.$node )},                                                                          
onSelect: function() {
  $("#date").val(this.getDate('d mmmm,yyyy'));
},                                 
onClose: initialBodyState                                                                                                 
})                                                                                                                        
                                                                                                                          
function scrollPageTo( $node ) {                                                                                          
    $( 'html, body' ).animate({                                                                                           
        scrollTop: ~~$node.offset().top - 60                                                                              
    }, 150)                                                                                                               
                                                                                                                          
    $( 'body' ).css( 'overflow', 'auto' )                                                                                 
}                                                                                                                         
function initialBodyState() {                                                                                             
    $( 'body' ).css( 'overflow', '' )                                                                                     
}                                                                                                                         
                                                                                                                          
var calendar = input.data( 'pickadate' );                                                                                 
                                                                                                                          
var timepicker = $('#timepicker').pickatime({                                                                             
  interval: 60,                                                                                                           
  max: [14,0],                                                                                                            
  clear: '',                                                                                                              
  disable: [                                                                                                              
    { from: [0,0], to: [8,0] },                                                                                           
    { from: [15,0], to: [0,0] }                                                                                           
  ],                                                                                                                      
  onSet: function() {                                                                                                     
    var waktu = tpicker.get('select').pick;                                                                               
    var current_waktu = tpicker.get('now').pick;                                                                          
    $("#time").val((waktu - (waktu % 60))/60 +'.'+ (waktu%60));
    $("#current_time").val((current_waktu - (current_waktu % 60))/60 +'.'+ (current_waktu%60)); 
  },                                                                                                                      
}),                                                                                                                       
                                                                                                                          
tpicker = timepicker.pickatime('picker');                                                                                 
                                                                                                                          
var current_waktu = tpicker.get('now').pick;                                          
var cek_time = (current_waktu - (current_waktu % 60))/60 +'.'+ (current_waktu%60);    
if(cek_time < 9.0)                                                                    
  tpicker.set('select',[9,0]);                                                        
else if(cek_time > 14.0)                                                              
  tpicker.set('select',[14,0]);                                                       
else                                                                                  
  tpicker.set('select',tpicker.get('now'));                                           
                                                                                      
tpicker.set('min', true);                                                             
                                                                                      
$('#picker_inline_fixed').on('change', function () {                                  
  var cdate = calendar.getDate('d mmmm,yyyy');                                           
  var date = new Date();                                                              
  var utc = date.getDate()+' '+monthNames[(date.getMonth())]+','+date.getFullYear();          
  var ubah;                                                                           
  if(cdate == utc)                                                                    
    ubah = true;                                                                      
  else                                                                                
    ubah = [9,0];                                                                     
                                                                                      
  tpicker.set('min', ubah);                                                           
});                                                                                   

