// Selecting our elements
const bd_input = document.querySelector("#birthday-input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");



function calc_age() {

    let birth_date = new Date(bd_input.value);
    let current_date = new Date();

    if (birth_date === "") {
        alert("Please enter a valid birthday!");
    }else {
        let year = current_date.getFullYear() - birth_date.getFullYear();
        let month = current_date.getMonth() - birth_date.getMonth();
        

        if (month < 0 || (month === 0 && current_date.getDate() < birth_date.getDate())) {
            year--;
        }
        
            result.innerText = `You're ${year} ${year > 1 ? "years": "year"} old.`
    }
}


btn.addEventListener("click", calc_age)