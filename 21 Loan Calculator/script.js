const loanAmount = document.querySelector("#loan-amount");
const interestRate = document.querySelector("#interest-rate");
const monthlyPay = document.querySelector("#monthly-pay");

function calcLoan() {
    let principal = parseFloat(loanAmount.value);
    let annualInterestRate = parseFloat(interestRate.value) / 100;
    let monthlyInterestRate = annualInterestRate / 12;
    let numberOfPayments = 12; // Assuming a 1-year loan term (can be modified)

    let monthlyPayment = (principal * monthlyInterestRate) / 
                         (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    if (!isNaN(monthlyPayment) && monthlyPayment > 0) {
        monthlyPay.value = monthlyPayment.toFixed(2);
    } else {
        monthlyPay.value = 0;
    }
}
