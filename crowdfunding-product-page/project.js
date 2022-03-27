let backThisProjectBtn = document.getElementById("backThisProject");
let modalSection = document.getElementById("modalSection");
let modalBox = document.getElementById("modalBox");
let closeModalBtn = document.getElementById("closeBtn");

//event listeners 
backThisProjectBtn.onclick = function(){
    modalSection.style.display = "flex";
    modalBox.style.display = "block";
};

closeModalBtn.onclick = function(){
    modalSection.style.display = "none";
    modalBox.style.display = "none";
}