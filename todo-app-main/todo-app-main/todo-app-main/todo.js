let input = document.getElementById("todo-input");
let todoContainer = document.getElementById("todo-container");
let number = document.getElementById("number");
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");

function itemNumber(){
    number.innerHTML = $(".todo__item").length;
}

function clearCompleted(){
    let completedList = document.querySelector(".todo__content").contains(".content-completed");
}

input.addEventListener("keyup", function(e){
    if(e.keyCode == 13){
        if(input.value.length > 3){
            todoContainer.innerHTML += `
            <li class="todo__item">
                <div class="todo__inner">
                    <a href="#" class="todo__circle" id="circle"></a>
                    <p class="todo__content" id="todo-content">${input.value}</p>
                </div>
                <a href="#" id="delete" class="cancle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                </a>
            </li>
            `;
    
            input.value = "";
            itemNumber();
        }else{
            alert("Words are too short.");
        }
    }
});

$(todoContainer).delegate("#delete", "click", function(){
    $(this).parentsUntil("#todo-container").remove();
    itemNumber();
});

$(todoContainer).delegate("#circle", "click", function(){
    $(this).addClass("circle-active");

    $(this).siblings().addClass("content-completed");
});

$("#all").on("click", function(){
    $(this).siblings().removeClass("choice-active");
    $(this).addClass("choice-active");
});

$("#ac-text").on("click", function(){
    $(this).siblings().removeClass("choice-active");
    $(this).addClass("choice-active");

    console.log("heleo");

});


$("#completed").on("click", function(){
    $(this).siblings().removeClass("choice-active");
    $(this).addClass("choice-active");
});

$(moon).on("click", function(){
    console.log("hello")
    $("body").toggleClass("night-mode");
    
        moon.style.display = "none";

       sun.style.display = "block";
});

$(sun).on("click", function(){
    $("body").removeClass("night-mode");
    moon.style.display = "block";
    sun.style.display = "none";
});
