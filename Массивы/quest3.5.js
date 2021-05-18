function map(fn, array){
    var array2 = [];
    for(var i=0; i<array.length; i++){
     array2[i] = fn(array[i]);
    }
    return array2;
   }
