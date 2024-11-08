$(function () {

  $('.product-list__filter-button').on('click', function () {
    $('.product-list__filters').slideToggle();
  });

  $('.footer-top__title-akk').on('click', function () {
    // Так же присутствует метод (вместо siblings) - .next() - возьмёт след элемент
    $(this).siblings().slideToggle();
    $(this).toggleClass('footer-top__title-akk--active');
  });

  $('.menu__btn').on('click', function (e) {
    $('.menu__nav').toggleClass('menu__nav--active')
    $('body').toggleClass('no-scroll')
  });

  $('.product-tabs__link').on('click', function (e) {
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
    readOnly: true,
    starSvg: '<svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
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
    draggable: false,
    responsive: [
      {
        breakpoint: 878,
        settings: {
          draggable: true,
        }
      },
    ]
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

  if (!stockContainer) return;
  if (!newDesign) return;

  mixitup(stockContainer, config);
  mixitup(newDesign, config);



});