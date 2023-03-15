const btnElement = document.getElementById("compute");
const result = document.getElementById("bmi-result");
const condition = document.getElementById("weight-condition");
const infoText = document.getElementById("info-text");

function calculateBMI() {
  condition.style.display = "none";
  result.style.display = "none";
  infoText.style.display = "none";

  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  const bmiValue = weightValue / heightValue ** 2;
  // infoText.innerText = "Weight Condition: "


  if (weightValue != 0 && heightValue != 0 && heightValue > 0 && weightValue > 0) {
    infoText.style.display = "flex";
    infoText.style.justifyContent = "center";
    result.value = bmiValue;
    result.style.display = "block";
    condition.style.display = "block";
    
    if (result.value < 16) 
        condition.innerText = "Severe Thinness";
    else if (result.value >= 16 && result.value < 17)
        condition.innerText = "Moderate Thinness";
    else if (result.value >= 17 && result.value < 18.5)
        condition.innerText = "Mild Thinness";
    else if (result.value >= 18.5 && result.value < 25)
        condition.innerText = "Normal";
    else if (result.value >= 25 && result.value < 30)
        condition.innerText = "Overweight";
        else if (result.value >= 30 && result.value < 35)
        condition.innerText = "Obese Class 1";
        else if (result.value >= 35 && result.value < 40)
        condition.innerText = "Obese Class 2";
        else 
        condition.innerText = "Obese Class 3";
    }
    
    else {
      infoText.style.display = "flex";
      infoText.style.justifyContent = "center";
      condition.style.display = "block";
      condition.innerText = "An error occurred!!!";
  }
}

btnElement.addEventListener("click", calculateBMI);
