let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "c":
                display.innerText = "";
                break;
            case "⇚":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                }
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                break;
                default :
                display.innerText += e.target.innerText;
        }
    })
})
// i do realise that this is not a very good application,
// it does not have the required capability of a regular calulator
// and the eval function is not a secure way of writing code
// this app is made only to experiment on consepts during learning