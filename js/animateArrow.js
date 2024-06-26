function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top >= 0 && rect.bottom <= windowHeight;
}

function handleAnimations() {
  const changeWeeks = document.querySelectorAll(".info__change-week");
  const changeMonth = document.querySelectorAll(".info__change-month");

  changeWeeks.forEach((week) => {
    if (isElementInViewport(week)) {
      week.classList.add("animated");
      week.querySelector(".info__change-line-green").classList.add("animated");
    }
  });

  changeMonth.forEach((month) => {
    if (isElementInViewport(month)) {
      month.classList.add("animated");
      month.querySelector(".info__change-line-red").classList.add("animated");
    }
  });
}
document.addEventListener("DOMContentLoaded", handleAnimations);
