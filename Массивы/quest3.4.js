function sumInputNumbers() {

    let numbers = []; // Создаем массив с числами
    let sum; // Переменная для хранения суммы элементов массива
  
    while (true) {
  
      let value = prompt("Число"); // Ввод чисел с клавиатуры
  
      if (value == "" || value == null || !isFinite(value)) break;   // isFinite проверяет является ли числом
  
      numbers.push(+value); // Заносим числа в конец массива
    }
  
    for (i=0; i < numbers.push; i++) { // Цикл для сложения элементов массива
      sum += numbers.push[i] ; // Сумма всех элементов массива
    }
    return sum;
  }
  
  alert( sumInputNumbers() );
