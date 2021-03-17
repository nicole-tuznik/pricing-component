const toggle = document.querySelector("#toggle");
let monthlyPrice = document.querySelectorAll(".card__price-monthly");
let annualPrice = document.querySelectorAll(".card__price-annually");

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    for (i = 0; i < annualPrice.length; i++) {
      annualPrice[i].style.display = "none";
    }
    for (i = 0; i < monthlyPrice.length; i++) {
      monthlyPrice[i].style.display = "block";
    }
  } else {
    for (i = 0; i < annualPrice.length; i++) {
      annualPrice[i].style.display = "block";
    }
    for (i = 0; i < monthlyPrice.length; i++) {
      monthlyPrice[i].style.display = "none";
    }
  }
});
