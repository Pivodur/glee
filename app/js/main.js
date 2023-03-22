$(function(){

   const blogImgHeight = document.querySelector('.blog-one__img-left');
   blogImgHeight.parentNode.style.minHeight = blogImgHeight.offsetHeight + 'px';
   

   $(".product-tabs__top-item").on("click", function(e) {
      e.preventDefault();
      $(".product-tabs__top-item").removeClass("product-tabs__top-item--active");
      $(this).addClass("product-tabs__top-item--active");
      $(".product-tabs__content-item").removeClass("product-tabs__content-item--active");
      $($(this).attr('href')).addClass("product-tabs__content-item--active");
   })

   $(".product-form__num").styler()


   $(".related__slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      // infinite: false
   })

   $(".related__btn--previous").on("click", function(){
      $(".related__slider").slick('slickPrev')
   })
   $(".related__btn--next").on("click", function(){
      $(".related__slider").slick('slickNext')
   })

   $(".product-slide__thumbs").slick({
      asNavFor: ".product-slide__bigs",
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      focusOnSelect: true,
      vertical: true,
   })
   $(".product-slide__bigs").slick({
      asNavFor: ".product-slide__thumbs",
      fade: true,
      arrows: false,
      draggable: false,
   })

   $(".shop-content__view-btn").on("click", function(){
      $(".shop-content__view-btn").removeClass("shop-content__view-btn--active")
      $(this).addClass('shop-content__view-btn--active')
   })
   $(".shop-content__view-btn--grid").on("click", function(){
      $(".products-item").removeClass("products-item--list")
   })
   $(".shop-content__view-btn--list").on("click", function(){
      $(".products-item").addClass("products-item--list")
   })
   $(".products-item__btn").on("click", function(){
      $(this).toggleClass("products-item__btn--active")
   })

   $(".stars").rateYo({
      starWidth: "11px",
      spacing: "8px",
      normalFill: '#ccccce',
      ratedFill: '#FFC35B',
      readOnly: 'true',
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
   });

   $(".products-item__stars, .product__stars").rateYo({
      starWidth: "18px",
      spacing: "13px",
      normalFill: '#ccccce',
      ratedFill: '#FFC35B',
      readOnly: 'true',
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
   });
    

   let filterBrandAmount = $('.filter-brand__amount');
   filterBrandAmount = Array.from(filterBrandAmount);
   let max = 0;
   filterBrandAmount.forEach((el) => {
     if (el.offsetWidth > max) {
       max = el.offsetWidth;
     }
   });
   filterBrandAmount.forEach(element => {
     element.style.width = max + 'px';
   });

   $(".filter-price__input").ionRangeSlider({
      type: "double",
      hide_from_to: true, 
      hide_min_max: true,
      onChange: function (data) {
         $(".filter-price__from").text("$"+data.from);
         $(".filter-price__to").text("$"+data.to);
      },
      onStart: function (data) {
         $(".filter-price__from").text("$"+data.from);
         $(".filter-price__to").text("$"+data.to);
      }
   });
   
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