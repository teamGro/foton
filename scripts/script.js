let aboutQuantites = document.querySelectorAll(".about__quantity");

Array.from(aboutQuantites).forEach((i) => {
  let num = i.textContent;

  anime({
    targets: i,
    innerHTML: [0, num],
    easing: "linear",
    round: 10, // Will round the animated value to 1 decimal
  });
});
