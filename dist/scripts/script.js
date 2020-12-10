let windowWidth = $(window).width();
let firstBlockSlider;
let isSliderExist = false;
if (windowWidth < 1300) {
  firstBlockSlider = new Glide('.glide_2', {
    type: 'carousel',
    startAt: 0,
    peek: {
      before: 0,
      after: 50,
    },
    breakpoints: {
      490: {
        perView: 1,
      },
      768: {
        perView: 2,
      },
      1024: {
        perView: 3,
      },
      1301: {
        perView: 4,
      },
    },
  }).mount();
  isSliderExist = true;
}

$(window).on('resize', () => {
  if ($(window).width() >= 1024) {
    let btnElem = $('.gallery__arrows');
    let galleryHeight = $('.gallery__wrapper').height() / 2 + 5;
    btnElem.css('top', `${galleryHeight}px`);
  }

  if ($(window).width() <= 1300 && !isSliderExist) {
    firstBlockSlider = new Glide('.glide_2', {
      type: 'carousel',
      startAt: 0,
      peek: {
        before: 0,
        after: 50,
      },
      breakpoints: {
        490: {
          perView: 1,
        },
        768: {
          perView: 2,
        },
        1024: {
          perView: 3,
        },
        1301: {
          perView: 4,
        },
      },
    }).mount();
    isSliderExist = true;
    return;
  }

  if ($(window).width() > 1300 && isSliderExist) {
    firstBlockSlider.destroy();
    isSliderExist = false;
    return;
  }
});

let aboutQuantites = document.querySelectorAll('.about__quantity');
let aboutQuantityValues = [
  {
    val: 13,
  },
  {
    val: 14,
  },
  {
    val: 30,
  },
];
let distanceToAbout = $('.about').offset().top - $(window).scrollTop() - $('.about').height();

let quantityStart = false;
$(window).on('scroll', showQuantity);

function showQuantity() {
  if ($(window).scrollTop() >= distanceToAbout) {
    Array.from(aboutQuantites).forEach((item, i) => {
      anime({
        targets: item,
        innerHTML: [0, aboutQuantityValues[i].val],
        round: 1,
        easing: 'easeInOutExpo',
      });
    });
    quantityStart = true;
  }
  if (quantityStart) {
    $(window).off('scroll', showQuantity);
  }
}

new Glide('.glide', {
  type: 'carousel',
  breakpoints: {
    3000: {
      perView: 4,
    },
    1024: {
      perView: 3,
    },
    768: {
      perView: 3,
    },
  },

  startAt: 0,
}).mount();

setTimeout(() => {
  let btnElem = $('.gallery__arrows');
  for (let i = 0; i < 10; i++) {
    let galleryHeight = $('.gallery__wrapper').height() / 2 + 5;
    if (galleryHeight < 150) continue;
    btnElem.css('top', `${galleryHeight}px`);
    break;
  }
}, 500);

// $('.gallery__link').fancybox({
//   loop: true,
//   keyboard: true,
//   infobar: false,
//   imageScale: {
//     "overlayOpacity": 0.7,
//   },
//   buttons: [
//     'close'
//   ],
// });
