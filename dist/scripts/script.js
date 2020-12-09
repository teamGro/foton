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

let galleryData = {
  1: {
    group: 1,
    imgSet: ['./img/img1-block3.jpg', './img/img2-block3.jpg', './img/img3-block3.jpg'],
  },
  2: {
    group: 2,
    imgSet: ['../img/img2-block3.jpg', '../img/img1-block3.jpg', '../img/img3-block3.jpg'],
  },
  3: {
    group: 3,
    imgSet: ['../img/img3-block3.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  4: {
    group: 4,
    imgSet: ['../img/img4-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  5: {
    group: 5,
    imgSet: ['../img/img1-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  6: {
    group: 6,
    imgSet: ['../img/img2-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  7: {
    group: 7,
    imgSet: ['../img/img3-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  8: {
    group: 4,
    imgSet: ['../img/img4-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  9: {
    group: 4,
    imgSet: ['../img/img1-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  10: {
    group: 4,
    imgSet: ['../img/img2-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  11: {
    group: 4,
    imgSet: ['../img/img3-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  12: {
    group: 4,
    imgSet: ['../img/img4-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  13: {
    group: 4,
    imgSet: ['../img/img1-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  14: {
    group: 4,
    imgSet: ['../img/img2-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  15: {
    group: 4,
    imgSet: ['../img/img3-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
  16: {
    group: 4,
    imgSet: ['../img/img4-block4.jpg', '../img/img2-block3.jpg', '../img/img1-block3.jpg'],
  },
};

// $(window).on('click', () => {
//   if (overlay.hasClass('overlay_active')) {
//     console.log(2);
//     overlay.removeClass('overlay_active');
//   }
// })

let overlay = $('.overlay');
$('.gallery__slides').on('click', (e) => {
  let target = $(e.target);
  target = target.closest('.gallery__link');
  targetID = target.attr('id');
  console.log(1);
  overlay.addClass('overlay_active');
  console.log(overlay);
  let parentElem = overlay.find('.modal__items');
  createMarkupForGallerySlider(parentElem, galleryData[targetID]);
});

function createMarkupForGallerySlider(parent, data) {
  for (let i = 0; i < data.imgSet.length; i++) {
    let item = document.createElement('li');
    item.className = 'glide__slide modal__item';
    let img = document.createElement('img');
    img.src = data.imgSet[i];
    item.append(img);
    parent.append(item);
  }

  let parentTop = $(window).scrollTop() + $(window).height() / 2;
  parent.css('top', `${parentTop}px`);

  new Glide('.glide_3', {
    perView: 1,
  }).mount();
}
