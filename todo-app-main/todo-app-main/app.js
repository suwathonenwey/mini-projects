let input = document.querySelector("#todo-input");
let todoUL = document.querySelector("#todo-ul");
let number = document.querySelector("#number");
let allClear = document.querySelector(".clear-completed");
let choices = document.querySelectorAll(".choice");


//add event listener
input.addEventListener("keyup", addToDo);
todoUL.addEventListener("click", deleteAndComplete);
allClear.addEventListener("click", clearAll);


//functions

function createList(){
    if(input.value.trim()){
        //create elements and append
    let todoLI = document.createElement("li");
    let innerDiv = document.createElement("div");
    let todoCircle = document.createElement("a");

    let todoContent = document.createElement("p");
    todoContent.textContent = input.value;

    let todoDelete = document.createElement("a");
    let img = document.createElement("img");
    img.src = `images/icon-cross.svg`;
    todoDelete.append(img);


    innerDiv.appendChild(todoCircle);
    innerDiv.appendChild(todoContent);

    todoLI.appendChild(innerDiv);
    todoLI.appendChild(todoDelete);


    //add classes to newly created elements
    todoLI.classList.add("todo__item");
    innerDiv.classList.add("todo__inner");
    todoCircle.classList.add("todo__circle");
    todoContent.classList.add("todo__content");
    todoDelete.classList.add("cancle");

    //append to ul
    todoUL.append(todoLI);

    input.value = "";
    localStorage.setItem("todo-list", todoUL.innerHTML)
    }
}

function addToDo(e){
    if(e.keyCode == "13"){
        
        let noText = document.querySelector(".no-text");
        if(noText){
            noText.remove();
        }

        createList();

    }
}

function deleteAndComplete(e){
    let targetItem = e.target;

    if(targetItem.classList.contains("cancle")){
        // console.log("cancle")
        let itemToDelete = targetItem.parentElement;
        itemToDelete.remove();
    }

    if(targetItem.classList.contains("todo__circle")){
        // console.log("circle")
        let itemToDecorate = targetItem.nextElementSibling;
        itemToDecorate.classList.add("completed-content");
        targetItem.classList.add("todo__complete");
    }
}

function clearAll(todoUL){

    todoUL.innerHTML = "";
    localStorage.removeItem("todo-list");
}

function filterTasks(e){
    console.log(e.target);

    //loop choices and filter tasks
    choices.forEach(choice => {
        choice.addEventListener("click", function(){
            let choiceId = choice.getAttribute("id");
            
            switch(choiceId){
                case "all":
                    break;

                    case "ac-text":
                        console.log("ac-text");
                        todoUL.removeChild();
                        break;

                    case "completed":
                        console.log("completed")
            }

        })
    });
}

function storeInLocalStorage(){
    if(localStorage.getItem("todo-list")){
        todoUL.innerHTML = localStorage.getItem("todo-list");
        console.log("there is list");
    }else{
        todoUL.innerHTML = `<h3 class="no-text">There is no task yet. </h3>`;
        console.log("there is no list")
    }
}

storeInLocalStorage();


choices.forEach(choice => {
    choice.addEventListener("click", function(){
        let choiceId = choice.getAttribute("id");
        
        switch(choiceId){
            case "all":
                break;

                case "ac-text":
                    console.log("ac-text");
                    
                    break;

                case "completed":
                    console.log("completed")
        }

    })
});

// Array.from(choices).forEach(function(choice){
//     choice.addEventListener("click", function(e){
//         let list = e.target.parentElement.parentElement.nextElementSibling;
//         // let listItem = list.children;
//         console.log(list)
//         console.log(listItem)
//     })
// })

for(let i = 0; i < todoUL.children.length; i ++){

    choices.forEach(choice => {
        choice.addEventListener("click", function(){
            let choiceId = choice.getAttribute("id");
            let task = todoUL.children[i].firstChild.firstChild;
            
            
            switch(choiceId){
                case "all":
                    task.parentElement.parentElement.style.display = "flex";
                    break;
    
                    case "ac-text":
                        if(task.classList.contains("todo__complete")){
                            task.parentElement.parentElement.style.display = "none";
                        }else{
                            task.parentElement.parentElement.style.display = "flex";
                        }
                        break;
    
                    case "completed":
                        console.log("completed")

                        if(task.classList.contains("todo__complete")){
                            task.parentElement.parentElement.style.display = "flex";
                        }else{
                            task.parentElement.parentElement.style.display = "none";
                        }
                        break;
            }
    
        })
    });
}

function clearAll(){

}