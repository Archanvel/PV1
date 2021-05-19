{   
    let a = prompt("Введите a: ");
    let b = prompt("Введите b: ");
    let sum = 0;
 
    for (i = a; i <= b; i++){
        if (!(i % 2) == 0){  // Если остаток от деления на 2 равен нулю
        sum += a + b;       // Сумму чисел заносим в переменную sum 
        }
    }
    console.log(sum);
}
