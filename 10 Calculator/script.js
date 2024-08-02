const result = document.getElementById("result");

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (buttons[i].textContent === "C") {
            clearInput()
        } else if (buttons[i].textContent === " = ") {
            calculateResult(result.value)
        } else if(buttons[i].textContent === "Backspace") {
            result.value = result.value.slice(0, -1); 
        
        } else {
            result.value += buttons[i].textContent;
        }
    })
}

function clearInput() {
    result.value = "";
}

function calculateResult(input) {
    if(input === "") {
        input = "="
    }
result.value = eval(input);

}
