$(function () {

  $('.product-tabs__link').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
    

  });

  $('.product-top__content-num').styler();

  $(".product-list__star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "15px",
    readOnly: true
  });
  
  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "7px",
    readOnly: true
  });

  $('.filter__price-input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.99,
    onChange: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
  });

  $('.additionally__slide').slick({

  });

  $('.product-slide__cut').slick({
    asNavFor: '.product-slide__norm',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__norm').slick({
    asNavFor: '.product-slide__cut',
    arrows: false,
    fade: true,
    draggable: false
  });

  $('.top-slider__wrapper').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  var stockContainer = document.querySelector('[data-ref="stock-content"]');
  var newDesign = document.querySelector('[data-ref="new-design"]');
  var config = {
    controls: {
      scope: 'local'
    }
  };
  var mixer = mixitup(stockContainer, config);
  var mixerTwo = mixitup(newDesign, config);

  

});