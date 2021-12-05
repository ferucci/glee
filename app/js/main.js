$(function () {

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