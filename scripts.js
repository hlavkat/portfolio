function markUpProgress(dataType) {
  document
    .querySelectorAll(`*[data-type='${dataType}']`)
    .forEach((e) => e.classList.add("mark-up-icon"));
}
function removeMarkUpProgress(dataType) {
  document
    .querySelectorAll(`*[data-type='${dataType}']`)
    .forEach((e) => e.classList.remove("mark-up-icon"));
}
