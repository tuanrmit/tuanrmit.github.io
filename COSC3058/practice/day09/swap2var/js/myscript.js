// Swap 2 numbers
function swap(x, y) {
    x = x + y; // z == x
    y = x - y // y == x
    x = x - y;
}

// Main
var x = Number(prompt("Enter number x: "));
var y = Number(prompt("Enter number y: "));

console.log("Before swapped, x = " + x + " and y = " + y);
alert("Before swapped, x = " + x + " and y = " + y);

swap(x, y);

console.log("After swapped, x = " + x + " and y = " + y);
alert("After swapped, x = " + x + " and y = " + y);
