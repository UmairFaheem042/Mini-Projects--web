const celsiusElement = document.getElementById("celsius");
const fahrenheitElement = document.getElementById("fahrenheit");

function computeTemp(event) {
  const currentValue = +event.target.value;
  // + is to tell it that currentValue is not a string
  celsiusElement.style.color = "black";
  fahrenheitElement.style.color = "black";

  switch (event.target.name) {
    case "celsius":
      fahrenheitElement.value = (currentValue * 1.8 + 32).toFixed(2);

      // assigning colors to the values
      if (fahrenheitElement.value > 100) fahrenheitElement.style.color = "red";
      else if (fahrenheitElement.value < 98.99 && fahrenheitElement.value >= 98)
        fahrenheitElement.style.color = "green";
      else fahrenheitElement.style.color = "blue";

      break;

    case "fahrenheit":
      celsiusElement.value = ((currentValue - 32) / 1.8).toFixed(2);

      if (celsiusElement.value > 37.22) celsiusElement.style.color = "red";
      else if (celsiusElement.value <= 37.22 && celsiusElement.value >= 36)
        celsiusElement.style.color = "green";
      else celsiusElement.style.color = "blue";

      break;
  }
}
