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

new Glide(".glide_2", {
  type: "carousel",
  perView: 1,
  startAt: 0,
  peek: {
    before: 0,
    after: 50
  },
}).mount();



setTimeout(() => {
  let btnElem = $('.gallery__arrows');
  let galleryHeight = $('.gallery__wrapper').height() / 2 + 5;
  console.log(galleryHeight);
  btnElem.css('top', `${galleryHeight}px`);
}, 300);

console.log($('.slick-dots'));