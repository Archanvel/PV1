{
    var a = prompt("Введите a: ");
    var b = prompt("Введите b: ");
    var sum;
 
    for (i = a; i <= b; i++){
        sum += !(i % 2) ? i : 0;
    }
    console.log(sum);
}
