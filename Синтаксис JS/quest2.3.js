let min,max;
let a = prompt("Введите a: ");
let b = prompt("Введите b: ");
let c = prompt("Введите с: ");

if (a > b)   max = a;
else         max = b;
if (c > max) max = c;
console.log ("Максимальное число: ", max);

if (a < b)   min = a;
else         min = b;
if (c < min) min = c;
console.log ("Минимальное число: ", min);

  