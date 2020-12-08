let windowWidth = $(window).width();
let firstBlockSlider;
let isSliderExist = false;
if (windowWidth < 1300) {
  firstBlockSlider = new Glide(".glide_2", {
    type: "carousel",
    startAt: 0,
    peek: {
      before: 0,
      after: 50
    },
    breakpoints: {
      490: {
        perView: 1
      },
      768: {
        perView: 2,

      },
      1024: {
        perView: 3
      },
      1301: {
        perView: 4
      }
    }
  }).mount();
  isSliderExist = true;
}

$(window).on('resize', () => {
  if ($(window).width() <= 1300 && !isSliderExist) {

    firstBlockSlider = new Glide(".glide_2", {
      type: "carousel",
      startAt: 0,
      peek: {
        before: 0,
        after: 50
      },
      breakpoints: {
        490: {
          perView: 1
        },
        768: {
          perView: 2,

        },
        1024: {
          perView: 3
        },
        1301: {
          perView: 4
        }
      }
    }).mount();
    isSliderExist = true;
    return;
  }

  if ($(window).width() > 1300 && isSliderExist) {
    firstBlockSlider.destroy();
    isSliderExist = false;
    return;
  }
})



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
        easing: 'linear',
        round: 10,
      });
    });
    quantityStart = true;
  }
  if (quantityStart) {
    $(window).off('scroll', showQuantity);
  }
}

new Glide(".glide", {
  type: "carousel",
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
  console.log(galleryHeight);
  btnElem.css('top', `${galleryHeight}px`);
}, 300);

console.log($('.slick-dots'));