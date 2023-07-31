function showProgressHtml(id) {
  document.querySelector(id).classList.toggle("d-always");
}
function markUpProgress(dataType) {
  document
    .querySelectorAll(`*[data-type='${dataType}']`)
    .forEach((e) => e.classList.add("mark-up-progress"));
}
function removeMarkUpProgress(dataType) {
  document
    .querySelectorAll(`*[data-type='${dataType}']`)
    .forEach((e) => e.classList.remove("mark-up-progress"));
}
