class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getName(){
        return this.name;
    }
    getSurname(){
        return this.surname;
    }
}

var worker = new Person('Иван', 'Иванов');

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'


