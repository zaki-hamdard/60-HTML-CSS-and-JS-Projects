const calcButton = document.querySelector("button");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const resultEl = document.querySelector("#result");
const weightInfo = document.querySelector("h4 span");


calcButton.addEventListener("click", calcBMI);



function calcBMI() {

    const height = parseFloat((heightEl.value/ 100));
    const weight = weightEl.value;
    const bmi = (weight/ (height * height))

    let msg = "";

    if (bmi < 18) {
        msg = "Underweight";
    } else if (bmi >= 18 && bmi < 25) {
        msg = "healthy";
    } else if (bmi >= 25 && bmi < 30) {
        msg = "Overweight";
    } else {
        msg = "Obese";
    }


    resultEl.value = bmi;
    weightInfo.textContent = msg
}