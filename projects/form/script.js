const cenaZaDen = function (type) {
  if (type.value === "horske") {
    return 500;
  } else if (type.value === "detske") {
    return 200;
  } else if (type.value === "silnicni") {
    return 1500;
  } else if (type.value === "gravel") {
    return 2500;
  } else {
    return 0;
  }
};

const druhKolaRadio = document.querySelectorAll("[name=druhKola]");
const upozorneni = document.querySelector(".upozorneni");

druhKolaRadio.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (radio.checked) {
      upozorneni.textContent = "! ZADEJ POČET KOL !";
    } else {
      upozorneni.textContent = "";
    }
  });
});

function spocitejCenu() {
  const form = document.getElementById("form");
  const druhKola = form.querySelectorAll("[name=druhKola]");
  let celkovaCena = 0;

  druhKola.forEach((type) => {
    if (type.checked) {
      const pocet = form.querySelector(`[name="${type.value}Poc"]`).value;
      celkovaCena += pocet * cenaZaDen(type) * form.pocetDnuPujceni.value;
      console.log(celkovaCena);
    }
  });
  const cyklonosic = parseFloat(form.cyklonosic.value);
  celkovaCena += (celkovaCena * cyklonosic) / 100;

  form.celkovaCena.value = celkovaCena;

  if (form.rozpocet.value !== "") {
    const rozpocetZakaznika = parseFloat(form.rozpocet.value);
    form.vysledek.value =
      rozpocetZakaznika >= celkovaCena
        ? "Na půjčení vám výjde"
        : "Máte malý rozpočet";
  } else {
    form.vysledek.value = "";
  }
}
const submitButton = document.querySelector("#submit");
const emailChecker = document.querySelector("#email");
emailChecker.addEventListener("change", function () {
  if (
    emailChecker.value.indexOf("@") < 1 ||
    emailChecker.value.indexOf(".") < 1 ||
    emailChecker.value.indexOf(".cz") < 3
  ) {
    alert("Nespravna emailova adresa");
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});
