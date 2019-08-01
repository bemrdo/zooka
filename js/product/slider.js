  var view = 5;
  var space = 10;
  if ($(window).width() < 720){
      view = 2;
      space = 10;
  }
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: view,
    spaceBetween: space,
    slidesPerGroup: view,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
