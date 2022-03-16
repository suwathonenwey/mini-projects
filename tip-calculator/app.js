let billInput = document.getElementById("bill-input");
let personInput = document.getElementById("person-input");
let customInput = document.getElementById("custom-input");
let grid = document.getElementById("grid");
const percentTip = document.querySelectorAll("#percent-tip");
let tipText = document.querySelector(".tip");
let totalText = document.querySelector(".total");
let resetBtn = document.querySelector("#reset");
let zero = document.querySelector("#zero");


for(const tip of percentTip){
    tip.addEventListener("click", function(e){
        e.preventDefault();
        let percentValue = tip.getAttribute("data-value");
        calculate(percentValue);
    })
}

//event listeners
customInput.addEventListener("keyup", function(e){
    e.preventDefault();
    console.log(customInput.value);
    let percentValue = customInput.value;
    calculate(percentValue);

});

resetBtn.addEventListener("click", function(e){
    e.preventDefault();
    billInput.value = "";
    customInput.value = "";
    personInput.value = "";
    tipText.innerHTML = "0.00";
    totalText.innerHTML = "0.00";
})

//functions
function toNumber(x){
    return Number(x);
};

function calculate(x){
    if(personInput.value == 0){
        zero.classList.add("zero");
        zero.querySelector(".zero-text").style.display = "block";
        zero.nextSibling().style.display = "block";
    }
    else{
                        //get total tip
                        let totalTip = (toNumber(billInput.value) / 100) * x;

                        //get total bill
                        let totalBill = toNumber(billInput.value) + totalTip;
                
                        //person per tip
                        let personPerTip = totalTip / personInput.value;
                
                        //person per total 
                        let personPerTotal = totalBill / personInput.value;
                
                        //put value into innerhtml
                        tipText.innerHTML = personPerTip.toFixed(2);
                        totalText.innerHTML = personPerTotal.toFixed(2);
    }
}
