//your JS code here. If required.
function removeSelectedColor() {
  const select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex);
}

window.onload = function () {
  const button = document.querySelector('input[type="button"]');
  button.addEventListener("click", removeSelectedColor);
};
