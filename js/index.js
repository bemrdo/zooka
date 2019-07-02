$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#xoxotees-navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#xoxotees-navbar a').removeClass("is-active");
            currLink.addClass("is-active");
        }
        else{
            currLink.removeClass("is-active");
        }
    });
}


//TABS
$('#tabs li').on('click', function() {
var tab = $(this).data('tab');
$('#tabs li').removeClass('is-active');
$(this).addClass('is-active');
$('#tab-content div').removeClass('is-active');
$('div[data-content="' + tab + '"]').addClass('is-active test');
});

/*
// batas bener tp blm active
// Cache selectors
var lastId,
 topMenu = $("#xoxotees-navbar"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 500);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
        .parent().removeClass("is-active")
        .end().filter("[href=#"+id+"]").parent().addClass("is-active");
   }                   
});

//batas bener tp blm active

// Cache selectors
/*var lastId,
 topMenu = $(".navbar"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 500);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("is-active")
         .end().filter("[href=#"+id+"]").parent().addClass("is-active");
   }                   
});

/*$(document).ready(function() {
  var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    sections.each(function() {
      var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('is-active');
      sections.removeClass('is-active');
      
      $(this).addClass('is-active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('is-active');
    }
  });
});

  //SCROLL EFFECT
  $(function(){
    $('.navbar-end > a').click(function(){
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });
  });    
});

*/


$("#showModal").click(function() {
  $(".modal-produk").addClass("is-active");
});

$(".delete").click(function() {
   $(".modal-produk").removeClass("is-active");
});
