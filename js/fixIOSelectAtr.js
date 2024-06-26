const inputElement = document.querySelector('input[list="languages"]');
if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  inputElement.removeAttribute("list");
}
