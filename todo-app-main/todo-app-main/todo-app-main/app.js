let input = document.querySelector("#todo-input");
let todoUL = document.querySelector("#todo-ul");
let number = document.querySelector("#number");
let allClear = document.querySelector(".clear-completed");


//add event listener
input.addEventListener("keyup", addToDo);
todoUL.addEventListener("click", deleteAndComplete);
allClear.addEventListener("click", clearAll);

//functions
function addToDo(e){
    if(e.keyCode == "13"){
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
        }

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

}