class Employee{
    constructor(employeeName='Unknown', age=0, gender='Unknown', salary=50_000){// adding parameters means declaring them
        this.employeeName = employeeName; //initializing properties
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }

    work(){
        console.log(`${this.employeeName} is working.`);
    }
}

let emp1 = new Employee("John Doe", 30, "Male", 50000);
console.log(emp1);
let emp2 = new Employee("Julia Fari", 32, "Female",  28000);
console.log(emp2);

let emp3 = new Employee();
console.log(emp3);

let emp4 = new Employee("Emily Brown", 28);

console.log(emp4);

emp1.work();
emp2.work();
emp3.work();
emp4.work();