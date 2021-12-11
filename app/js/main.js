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
    readOnly: true,
    starSvg: '<svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
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
    infinite: false
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