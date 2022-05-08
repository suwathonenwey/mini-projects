let btn = document.getElementById("submit");
let container = document.getElementById("container");
let numbers = document.querySelectorAll(".rating-number");
let selectedNumber = document.getElementById("selected-number");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello")
    container.classList.toggle("show-thank-you");
});

let numberArray = [...numbers];

numberArray.forEach(number => {
    number.addEventListener("click", () => {
        selectedNumber.innerHTML = number.innerHTML;
    })
})