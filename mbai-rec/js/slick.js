$(document).ready(function () {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    $(".slider").slick({
      prevArrow:
        '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/sections/reviews/prev-slide-icon.svg" alt="" width="19" height="19"></button>',
      nextArrow:
        '<button class="slick-next" aria-label="Next" type="button"><img src="img/sections/reviews/next-slide-icon.svg" alt="" width="19" height="19"></button>',
      dots: true,
      customPaging: function (slider, i) {
        return '<span class="custom-dot"></span>';
      },
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      centerMode: false,
      variableWidth: true,
    });
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    $(".slider").slick({
      prevArrow:
        '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/sections/reviews/prev-slide-icon.svg" alt="" width="19" height="19"></button>',
      nextArrow:
        '<button class="slick-next" aria-label="Next" type="button"><img src="img/sections/reviews/next-slide-icon.svg" alt="" width="19" height="19"></button>',
      dots: true,
      customPaging: function (slider, i) {
        return '<span class="custom-dot"></span>';
      },
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      centerMode: false,
      variableWidth: true,
    });
  } else if (window.matchMedia("(max-width: 767px)").matches) {
    $(".slider").slick({
      prevArrow:
        '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/sections/reviews/prev-slide-icon.svg" alt="" width="19" height="19"></button>',
      nextArrow:
        '<button class="slick-next" aria-label="Next" type="button"><img src="img/sections/reviews/next-slide-icon.svg" alt="" width="19" height="19"></button>',
      dots: true,
      customPaging: function (slider, i) {
        return '<span class="custom-dot"></span>';
      },
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
    });
  }
});
