let styles = ["Джаз", "Блюз"]; // Создаем массив
styles.push("Рок-н-ролл"); // Добавляем в конец массива "Рок-н-ролл"
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");
