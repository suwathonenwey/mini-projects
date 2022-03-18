let result = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("buttons"));

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