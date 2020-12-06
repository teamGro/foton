let aboutQuantites = document.querySelectorAll(".about__quantity");
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
let distanceToAbout = $(".about").offset().top - $(window).scrollTop() - $(".about").height();

let quantityStart = false;
$(window).on("scroll", showQuantity);

function showQuantity() {
  if ($(window).scrollTop() >= distanceToAbout) {
    Array.from(aboutQuantites).forEach((item, i) => {
      anime({
        targets: item,
        innerHTML: [0, aboutQuantityValues[i].val],
        easing: "linear",
        round: 10,
      });
    });
    quantityStart = true;
  }
  if (quantityStart) {
    $(window).off("scroll", showQuantity);
  }
}
