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
      perView: 2,
    },
  },

  startAt: 0,
}).mount();

setTimeout(() => {
  let btnElem = $('.gallery__arrows');
  let galleryHeight = $('.gallery__wrapper').height() / 2 + 5;
  btnElem.css('top', `${galleryHeight}px`);
}, 300);

$('.gallery__link').fancybox({
  loop: true,
  keyboard: true,
  infobar: false,
  'max-width': '70vw',
  imageScale: {
    "overlayOpacity": 0.7,
  },
  buttons: [
    'close'
  ],
  btnTpl: {
    close:
      `<button data-fancybox-close class="overlay__close" title="{{CLOSE}}"></button>`,
    arrowLeft:
      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
      '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
      "</button>",

    arrowRight:
      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
      '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
      "</button>",
  },

  // beforeShow: function () {
  //   this.width = 800;
  //   this.height = 600;
  // }

});