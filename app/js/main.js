$(function(){
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