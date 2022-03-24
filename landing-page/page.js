let links = Array.from(document.querySelectorAll(".arrow"));
let accordions = document.getElementsByClassName("accordion");
let menuIcon = document.querySelector(".menu-icon");
let arrows = document.getElementsByClassName("arrow-img");

// links.forEach(function(link){
//     link.addEventListener("click", function(e){
//         e.preventDefault();
//         link.nextElementSibling.classList.toggle("display-block");

//         for(let i=0; i<arrows.length; i++){
//             arrows[i].classList.a
//         }
//     });
// });

for(let i=0; i< links.length; i++){
    links[i].addEventListener("click", function(e){
        e.preventDefault();
        links[i].nextElementSibling.classList.toggle("display-block");
        links[i].lastElementChild.classList.toggle("rotate");
    })
}

menuIcon.addEventListener("click", function(){
    document.querySelector(".menu-slide").classList.add("show-menu-slide");
    menuIcon.classList.add("display-none");
    document.querySelector(".close-btn").classList.add("display-block");

    document.querySelector(".close-btn").addEventListener("click", ()=>{
        document.querySelector(".menu-slide").classList.remove("show-menu-slide");
        menuIcon.classList.remove("display-none");
        document.querySelector(".close-btn").classList.remove("display-block");
    })
});

for(let i=0; i<accordions.length; i++){
    accordions[i].addEventListener("click", function(){
        this.classList.toggle("active");
    });
}