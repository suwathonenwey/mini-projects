let result = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("buttons"));
let themeNumbers = Array.from(document.getElementsByClassName("theme-number"));
let checkMark = document.getElementById("check-mark");

// buttons.map(button=> {
//     button.addEventListener("click", (e) => {
//         e.preventDefault();

//         switch (e.target.innerText.toLowerCase()){
//             case 'reset':
//                 console.log("reset")
//                 result.innerText = '';
//                 break;

//             case 'del':
//                 console.log("delete")
//                 result.innerText = result.innerText.slice(0, -1);
//                 break;

//             case '=':
//                 try{
//                 result.innerText = eval(result.innerText);
//                 }catch{
//                     result.innerText = "Something went wrong";
//                 }
//                 break;    
            
//             default:
//                 result.innerText += e.target.innerText;
//         }

//     })
// });

//fuction to show in display
let operator = ["+","-","*","/","."];

function showDisplay(x) {

    let current = result.innerHTML;
    let lastIndex = current[current.length-1];

    if(result.innerHTML == 0){
        return result.innerHTML = x;
    }else if(operator.includes(x) && operator.includes(lastIndex) ){
        console.log(current.substring(0,current.length-1)+x);
        return result.innerHTML = `${current.substring(0,current.length-1)}${x}`;
    }
    return result.innerHTML += x;
}

//function to calculate
function calculate(){
    let current = result.innerHTML;
    try{
        result.innerHTML = eval(current);
    }catch{
        result.innerHTML = "Something went wrong!"
    }
}

//function to clear all
function clearAll(){
    result.innerHTML = 0;
}

//function to clear last word
function clearEach(){
    let current = result.innerHTML;
    if(current.length == 1){
        result.innerHTML = 0;
    }else{
        result.innerHTML = current.substring(0, current.length-1);
    }
}

//changing themes
themeNumbers.map(themeNumber => {
    themeNumber.addEventListener("click", (e) => {
        e.preventDefault();

        switch(e.target.innerText){
            case '1':
                document.body.classList.remove("theme-2");
                document.body.classList.remove("theme-3");  
                checkMark.style.transform = "translateX(0)";
                break;
            
            case '2':
                document.body.classList.remove("theme-3");
                document.body.classList.add("theme-2");
                checkMark.style.transform = "translateX(22px)";
                break;

            case '3':
                document.body.classList.remove("theme-2");
                document.body.classList.add("theme-3");
                checkMark.style.transform = "translateX(44px)";

                break;
        }
    })
});