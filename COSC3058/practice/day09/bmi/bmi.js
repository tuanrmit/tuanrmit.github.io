/**
 * BMI = weight(kg) / height^2 (m^2)
 */
let weight = prompt("What is your weight in kilograms? ");
let height = prompt("What is your height in meters");
let bmi = Math.round(weight / (height**2), 0);
let bmiExplanation = "normal weight";

if (bmi < 18.5) {
    bmiExplanation = "underweight";
} else if (bmi > 24.9) {
    bmiExplanation = "overweight";
}
alert(`Your BMI is ${bmi}, so you are ${bmiExplanation}`);
console.log(`Your BMI is ${bmi}, so you are ${bmiExplanation}`);

