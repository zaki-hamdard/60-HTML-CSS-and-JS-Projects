const celsius = document.querySelector("#celsius-input");
const fahrenheit = document.querySelector("#fahrenheit-input");
const kelvin = document.querySelector("#kelvin-input");


function calcTemp(e) {
  const currentValue = +e.target.value;
  const target = e.target.name;

  switch(target) {
    case "celsius":
      kelvin.value = (currentValue + 273.32).toFixed(2);
      fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentValue- 32) / 1.8 + 273.32).toFixed(2)
      break;
    case "kelvin":
      celsius.value = (currentValue - 273.32).toFixed(2);
      fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2)
      break;
    default:
      break;
  }

}