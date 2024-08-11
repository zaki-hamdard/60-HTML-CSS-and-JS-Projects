const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const currency1 = document.querySelector(".show-currency1");
const currency2 = document.querySelector(".show-currency2");
const exchangeRate = document.querySelector(".exchange-rate");


function updateRate() {
  fetch(`https://v6.exchangerate-api.com/v6/da5f59b5f96647c5053967c3/latest/${currency1.value}`).then((response) => {
     response.json()
  }).then ((data) => {
    console.log(data)
  })
}


select1.addEventListener("change", updateRate)



