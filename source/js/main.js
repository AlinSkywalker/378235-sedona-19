var header = document.querySelector(".page-header");
var mainNav = header.querySelector(".main-nav");
var btnOpenMenu = mainNav.querySelector(".main-nav__toggle");

var btnConfirmForm = document.querySelector("#send-feedback");
var modalSuccess = document.querySelector(".form-modal__success");
var modalError = document.querySelector(".form-modal__failure");

mainNav.classList.remove("main-nav--nojs");

btnOpenMenu.addEventListener("click", function (event) {
  event.preventDefault();
  mainNav.classList.toggle("main-nav--close");
});

if (btnConfirmForm != null) {
  btnConfirmForm.addEventListener("click", function (event) {
    event.preventDefault();
    modalSuccess.classList.remove("modal--close");
    modalError.classList.remove("modal--close");
  });
}

if (modalSuccess != null) {
  var closemModalSuccess = modalSuccess.querySelector("#close-modal");
  closemModalSuccess.addEventListener("click", function (event) {
    event.preventDefault();
    modalSuccess.classList.add("modal--close");
  });
}

if (modalError != null) {
  var closeModalError = modalError.querySelector("#close-modal");
  closeModalError.addEventListener("click", function (event) {
    event.preventDefault();
    modalError.classList.add("modal--close");
  });
}
