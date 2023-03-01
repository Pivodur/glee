$(function(){
   $('.slider-top').slick({
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
   })

   var mixer1 = mixitup('.products', {
      controls: {
         scope: 'local'
      }
   })
   var mixer2 = mixitup('.design', {
      controls: {
         scope: 'local'
      }
   })
   
   // let containerEl1 = document.querySelector('.design');
   // let containerEl2 = document.querySelector('.products');
   // let config = {
   //     controls: {
   //         scope: 'local',
   //     },
   // };
   // (() => mixitup(containerEl1, config))();
   // (() => mixitup(containerEl2, config))();
});