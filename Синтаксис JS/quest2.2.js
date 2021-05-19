<<<<<<< HEAD
{   
    let a = prompt("Введите a: ");
    let b = prompt("Введите b: ");
    let sum = 0;
=======
{
    var a = prompt("Введите a: ");
    var b = prompt("Введите b: ");
    var sum;
>>>>>>> a174eb62013ddeb491be7924b4bfb1ebfe6dcf6b
 
    for (i = a; i <= b; i++){
        if (!(i % 2) == 0){  // Если остаток от деления на 2 равен нулю
        sum += a + b;       // Сумму чисел заносим в переменную sum 
        }
    }
    console.log(sum);
}
