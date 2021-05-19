{   
    var a = prompt("Введите a: ");
    var b = prompt("Введите b: ");
    var sum = 0;
 
    for (i = a; i <= b; i++){
        sum += !(i % 2);
    }
    console.log(sum);
}
