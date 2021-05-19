const numbers = [1, 2, 3, 4 , 5 , 6 , 7 , 8 , 9] // Создаем заданный массив
numbersResult = numbers.slice(0, 4).concat(0 , 0 , 0).concat(numbers.slice(5));
alert(numbersResult);
