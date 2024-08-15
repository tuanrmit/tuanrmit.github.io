function fahrenheitToCelcius() {

    let temperature = prompt("Enter a Fahrenheit temperature: ");
    let celcius = ((5 / 9) * (temperature - 32)).toFixed(1);
    document.write(`<h2>${temperature} Fahrenheit = ${celcius} Celcius</h2>`);
}