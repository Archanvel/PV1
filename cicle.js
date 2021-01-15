{
    var a = 0, b = 4, sum = 0;
 
    for (i = a; i <= b; i++){
        sum += !(i % 2) ? i : 0;
    }
    console.log(sum);
}