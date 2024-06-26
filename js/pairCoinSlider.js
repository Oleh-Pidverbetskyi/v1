function pairCatalogSlider() {
  const splide = new Splide("#pair__catalog-slider", {
    pagination: false,
    type: "slide",
    drag: "free",
    rewind: true,
    rewindByDrag: true,
    arrows: false,
    autoWidth: true,

    autoScroll: {
      speed: 1,
      pauseOnHover: true,
      autoStart: false,
    },
  });

  let isAutoScrolling = false;

  function updateAutoScroll() {
    if (window.innerWidth > 768 && !isAutoScrolling) {
      splide.Components.AutoScroll.pause();
      isAutoScrolling = true;
    } else if (window.innerWidth < 768 && isAutoScrolling) {
      splide.Components.AutoScroll.play();
      isAutoScrolling = false;
    }
  }
  window.addEventListener("resize", updateAutoScroll);
  splide.mount(window.splide.Extensions);

  updateAutoScroll();
}

pairCatalogSlider();