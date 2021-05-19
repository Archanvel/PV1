class Person { // Создаем класс Person
    constructor (name, surname) { // Создаем конструктор класса Person
        this.name = name;
        this.surname = surname;
    }
    getName(){ // Функция для возвращения имени
        return this.name;
    }
    getSurname(){ // Функция для возвращения фамилии
        return this.surname;
    }
}

var worker = new Person('Иван', 'Иванов'); // Создаем обьект worker класса Person и передаем параметры

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'


