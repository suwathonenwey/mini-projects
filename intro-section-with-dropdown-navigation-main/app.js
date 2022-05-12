let featureBtn = document.getElementById("feature");
let companyBtn = document.getElementById("company");
let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-icon");
let sidebar = document.getElementById("sidebar");

featureBtn.addEventListener("click", () => {
    console.log("feature")
    document.getElementById("feature-dropdown").classList.toggle("block");
});
companyBtn.addEventListener("click", () => {
    console.log("company")
    document.getElementById("company-dropdown").classList.toggle("block");
});
menuIcon.addEventListener("click", () => {
    sidebar.style.marginRight = "0";
    document.getElementById("sidebar-bg").classList.toggle("block")
});
closeIcon.addEventListener("click", () => {
    sidebar.style.marginRight = "-100%";
    document.getElementById("sidebar-bg").classList.toggle("block")
})