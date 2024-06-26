function breadCrumbSlider() {
  const splide = new Splide("#breadcrumb-slider", {
    pagination: false,
    type: "slide",
    drag: "free",
    rewind: true,
    rewindByDrag: true,
    arrows: false,
    start  : 4,
    autoWidth: true,
  }).mount();
}
breadCrumbSlider();