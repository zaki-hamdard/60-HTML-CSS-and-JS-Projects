const bill_amount = document.querySelector("#bill");
const tip_amount = document.querySelector("#tip");
const btn = document.querySelector("#btn");
const total_bill = document.querySelector("#total");

function calcTip() {
    const bill = bill_amount.value * (1 + tip_amount.value/ 100);

    total_bill.innerText = "$" + bill.toFixed(2);
}

btn.addEventListener("click", calcTip);