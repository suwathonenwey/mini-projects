let billInput = document.getElementById("bill-input");
let personInput = document.getElementById("person-input");
let customInput = document.getElementById("custom-input");
let grid = document.getElementById("grid");
const percentTip = document.querySelectorAll("#percent-tip");
let tipText = document.querySelector(".tip");
let totalText = document.querySelector(".total");
let resetBtn = document.querySelector("#reset");


for(const tip of percentTip){
    tip.addEventListener("click", function(e){
        e.preventDefault();
        let percentValue = tip.getAttribute("data-value");

        //get total tip
        let totalTip = (toNumber(billInput.value) / 100) * percentValue;

        //get total bill
        let totalBill = toNumber(billInput.value) + totalTip;

        //person per tip
        let personPerTip = totalTip / personInput.value;

        //person per total 
        let personPerTotal = totalBill / personInput.value;

        //put value into innerhtml
        tipText.innerHTML = personPerTip.toFixed(2);
        totalText.innerHTML = personPerTotal.toFixed(2);
    })
}

//event listeners
customInput.addEventListener("keyup", function(e){
    e.preventDefault();
    console.log(customInput.value);
    let percentValue = customInput.value;
        //get total tip
        let totalTip = (toNumber(billInput.value) / 100) * percentValue;

        //get total bill
        let totalBill = toNumber(billInput.value) + totalTip;

        //person per tip
        let personPerTip = totalTip / personInput.value;

        //person per total 
        let personPerTotal = totalBill / personInput.value;

        //put value into innerhtml
        tipText.innerHTML = personPerTip.toFixed(2);
        totalText.innerHTML = personPerTotal.toFixed(2);
})

//functions
function toNumber(x){
    return Number(x);
}

