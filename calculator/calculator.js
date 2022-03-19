let result = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("buttons"));
let themeNumbers = Array.from(document.getElementsByClassName("theme-number"));
let checkMark = document.getElementById("check-mark");

buttons.map(button=> {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        switch (e.target.innerText.toLowerCase()){
            case 'reset':
                console.log("reset")
                result.innerText = '';
                break;

            case 'del':
                console.log("delete")
                result.innerText = result.innerText.slice(0, -1);
                break;

            case '=':
                try{
                result.innerText = eval(result.innerText);
                }catch{
                    result.innerText = "ဟဲ့ မှားနေတယ်";
                }
                break;    
            
            default:
                result.innerText += e.target.innerText;
        }

    })
})

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
})