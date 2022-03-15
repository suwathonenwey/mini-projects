let billInput = document.getElementById("bill-input");
let personInput = document.getElementById("person-input");
let customInput = document.getElementById("custom-input");
let grid = document.getElementById("grid");
const percentTip = document.querySelectorAll("#percent-tip");
let tipText = document.querySelector(".tip")

//event listeners
// percentTip.forEach(function(tip){
//     console.log(tip)
// })

for(const tip of percentTip){
    tip.addEventListener("click", function(e){
        e.preventDefault();
        let percentValue = tip.getAttribute("data-value");

        //multiply the bill and person , we get total amount without tip
        let billAndPersonTotal = billInput.value * personInput.value;

        //to know how many tip, multiply the total value with tip percent
        let tipValue = (billAndPersonTotal / 100) * percentValue;

        //tip per person
        let tipPerPerson = tipValue / personInput.value;
        //append the tip amount per person into tip innerhtml
        tipText.innerHTML = tipPerPerson;

        console.log(tipPerPerson);
    })
}

//functions
function toNumber(x){
    return Number(x);
}