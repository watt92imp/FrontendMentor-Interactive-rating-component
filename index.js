const ratingContainer = document.querySelector(".rating-container");
const thanksContainer = document.querySelector(".thanks-container");
const btnSubmit = document.getElementById("btn-submit");
const rates = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const active = document.querySelector(".active");
let ratePoint = null;

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    console.log(`rating selected: ${rate.innerHTML}`);
    ratePoint = rate.innerHTML;
    result.innerHTML = ratePoint;
    activeClass();
    rate.classList.add("active");
  });
});

btnSubmit.addEventListener("click", () => {
  console.log(`click btn-submit`);
  if (ratePoint != null) {
    thanksContainer.classList.remove("hidden");
    ratingContainer.style.display = "none";
    console.log(`You selected ${ratePoint} out of 5`);
  }
});

function activeClass() {
  const active = document.querySelectorAll(".active");
  active.forEach((el) => {
    el.classList.remove("active");
  });
}
