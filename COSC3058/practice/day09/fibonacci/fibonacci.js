/**
 * f1 = 0
 * f2 = 1
 * f(n) = f(n-1) + f(n-2)
 */
let n = prompt("Enter a positive natural number: ");

function fibonacci(n) {
    let f = 0;
    let fprev = f;
    let fibonacciStr = f;
    if(n>=1) {
        f = f+1;
        fibonacciStr = fibonacciStr + " " + f.toString();
    }
    for(let i = 2; i <= n; i++) {
        temp = f;
        f = f + fprev;
        fprev = temp;
        fibonacciStr = fibonacciStr + " " + f.toString();
    }
    return fibonacciStr;
}

function fibonacci02(n) {
    let f = [0,1];
    let fibonacciStr = f[0];
    if (n >=1) {
        fibonacciStr = fibonacciStr + " " + f[1];
    }
    for(let i = 2; i <=n; i++) {
        f[i] = f[i-2] + f[i-1];
        fibonacciStr = fibonacciStr + " " + f[i];
    }
    return fibonacciStr;
}


alert(`Fibonacci(${n}): ${fibonacci(n)}`);
console.log(`Fibonacci(${n}): ${fibonacci02(n)}`);