const menu = document.querySelector(".burger__btn, burger__btn--off");
const mobileNavigation = document.querySelector(".navigation-mobile");
const checkbox = document.querySelector(".burger--checkbox");
const links = document.querySelectorAll(".navigation__link");
const main = document.querySelector(".main");

menu.addEventListener("click", () => {
  mobileNavigation.classList.toggle("navigation-mobile--active");
});

main.addEventListener("click", () => {
  if (mobileNavigation.classList.contains("navigation-mobile--active")) {
    mobileNavigation.classList.toggle("navigation-mobile--active");
    checkbox.checked = false;
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    mobileNavigation.classList.remove("navigation-mobile--active");
    checkbox.checked = false;
  }
});

links.forEach((item) =>
  item.addEventListener("click", () => {
    if (mobileNavigation.classList.contains("navigation-mobile--active")) {
      mobileNavigation.classList.toggle("navigation-mobile--active");
      checkbox.checked = false;
    }
  })
);