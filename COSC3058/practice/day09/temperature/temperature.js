let temperature = prompt("Enter a Fahrenheit temperature: ");

function toCelcius(fahrenheit) {
    return ((5 / 9) * (fahrenheit - 32)).toFixed(1);
}

alert(`The temperature is ${toCelcius(temperature)} Celcius.`);
console.log(`The temperature is ${toCelcius(temperature)} Celcius.`);
document.write(`<h2>${temperature} Fahrenheit = ${toCelcius(temperature)} Celcius</h2>`);