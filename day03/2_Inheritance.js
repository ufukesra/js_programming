
class Person{
    constructor(name, age,gender   ){
        this.gender = gender;
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

class Student extends Person{

    constructor(name, age, gender, studentId){
    
        super(name, age, gender);
        this.studentId = studentId;

    }

    studying(){
        console.log(`${this.name} is studying.`);
    }

}

class Teacher extends Person{

    teach(){
        console.log(`${this.name} is teaching.`);
    }
}

let student= new Student("John Doe", 20, "Male","S01");
let teacher= new Teacher("Mary Smith", 35, "Female");

console.log(student);
console.log(teacher);

student.eat();
teacher.eat();

student.studying();
teacher.teach();