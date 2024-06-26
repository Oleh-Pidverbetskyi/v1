const quotesListButtons = document.querySelector(".quotes__list");
const pairCatalog = document.querySelector(".pair__catalog");
const menuListButtons = document.querySelector(".menu__list");



//active menu
menuListButtons.addEventListener("click", (e) => {
  const target = e.target.closest(".menu__btn");
  if (target && !target.classList.contains("menu__btn-active")) {
    const id = target.getAttribute("data-tab");
    menuListButtons
      .querySelector(".menu__btn.menu__btn-active")
      .classList.remove("menu__btn-active");
    target.classList.add("menu__btn-active");
  }
});

//active menu quotes
quotesListButtons.addEventListener("click", (e) => {
  const target = e.target.closest(".quotes__btn");
  if (target && !target.classList.contains("active-btn")) {
    const id = target.getAttribute("data-tab");
    quotesListButtons
      .querySelector(".quotes__btn.active-btn")
      .classList.remove("active-btn");
    target.classList.add("active-btn");

    pairCatalog.forEach((list) => {
      if (list.classList.contains(id)) {
        list.style.display = "flex";
        list.classList.add("show-pair-list");
      } else {
        list.style.display = "none";
      }
    });
  }
});