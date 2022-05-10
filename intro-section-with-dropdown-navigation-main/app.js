let featureBtn = document.getElementById("feature");
let companyBtn = document.getElementById("company");

featureBtn.addEventListener("click", () => {
    console.log("feature")
    document.getElementById("feature-dropdown").classList.toggle("block");
});
companyBtn.addEventListener("click", () => {
    console.log("company")
    document.getElementById("company-dropdown").classList.toggle("block");
});