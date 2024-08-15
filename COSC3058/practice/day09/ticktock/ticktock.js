/**
 * S --> h:m:s
 * s (0 --> 59) = S % 60
 * m (0 - 59) = (S - s) % 60
 * h = S / 3600
 */ 
let S = parseInt(prompt("Enter the seconds: "));
let h = parseInt(S / 3600);
let m = parseInt((S % 3600) / 60);
let s = S % 60;
alert(`${S} seconds equals to ${h}:${m}:${s} (hours : minutes : seconds).`);
console.log(`${S} seconds 
    equals to 
    ${h}:${m}:${s} (hours : minutes : seconds).`);