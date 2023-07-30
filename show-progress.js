function showProgressHtml() {
  document.querySelector(".html-progress").classList.toggle("d-none");
}

document.addEventListener("DOMContentLoaded", function () {
  let showBorder = document.querySelector(".show-border");
  showBorder.addEventListener("resize", function () {
    if (window.outerWidth >= 768) {
      showBorder.classList.remove("show-border");
    }
  });
});
