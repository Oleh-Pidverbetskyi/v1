function menuSlider() {
  const splide = new Splide("#menu-slider", {
    pagination: false,
    type: "slide",
    drag: "free",
    rewind: true,
    rewindByDrag: true,
    arrows: false,
    start  : 3,
    autoWidth: true,
  }).mount();
}
menuSlider();
