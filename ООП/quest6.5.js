class User{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return this.name + '  ' + this.surname;
    }
}

class Student extends User{
    constructor (name, surname, year){
        super(year);
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    getCourse(){
        var fullyear = 2021;
        var course = fullyear - this.year;
        if (course >= 1 && course <= 5){
            return(course);
        }
        else{
            console.log('Error');
        }
    }
}

var student = new Student('Иван', 'Иванов', 2018);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2018
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2021