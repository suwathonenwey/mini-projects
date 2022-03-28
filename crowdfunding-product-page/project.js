let cyanButtons = document.getElementsByClassName("cyan-button");
let modalSection = document.getElementById("modalSection");
let modalBox = document.getElementById("modalBox");
let closeModalBtn = document.getElementById("closeBtn");
let accordion = document.getElementsByClassName("product-card-accordion");
let continueBtn = document.getElementsByClassName("continue");

//event listeners 
// backThisProjectBtn.onclick = function(){
//     modalSection.style.display = "flex";
//     modalBox.style.display = "block";
// };

closeModalBtn.onclick = function(){
    modalSection.style.display = "none";
    modalBox.style.display = "none";
}

//loop for accordion cards
for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}

//loop cyan buttons and show modalbox
for(let i=0; i< cyanButtons.length; i++){
    cyanButtons[i].addEventListener("click", function(){
        modalSection.style.display = "flex";
        modalBox.style.display = "block";
        document.getElementById("success-modal-box").style.display = "none";
    })
}

//loop continue btns and see which products to buy
for(let i=0; i<continueBtn.length; i++){
    continueBtn[i].addEventListener("click", function(){
        modalBox.style.display = "none";
        document.getElementById("success-modal-box").style.display = "block";
    })
}

//close success modal box
document.querySelector(".got-btn").onclick = function(){
    document.getElementById("success-modal-box").style.display = "none";
    modalSection.style.display = "none";
}

//bookmark active
document.getElementById("bookmark").addEventListener("click", () => {
    document.getElementById("bookmark").classList.toggle("bookmark-active");
})