const arr = [1, 2, 3, 4 , 5 , 6 , 7 , 8 , 9]
arrResult = arr.slice(0, 4).concat(0 , 0 , 0).concat(arr.slice(5));
alert(arrResult);