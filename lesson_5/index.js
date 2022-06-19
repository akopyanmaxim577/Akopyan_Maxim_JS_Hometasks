//Task1

// let employee = { 
//     name: "Steven", 
//     experience: 3,
//     direction: "web-development",

// };


// function propsCount(object){
//     return Object.keys(object).length;
// }
// console.log(`${propsCount(employee)}`);

//Task 2
let person = {
    name: "Akopyan Max",
    age: 19,
    city: "Kyiv",
    course: "JS fundamental",

};

function showProps(obj){
    console.log( `Properties: ${Object.keys(obj)}`);
    console.log( `Values: ${Object.values(obj)}`);
}
showProps(person);

//Task 3
class Person {

    constructor (name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return this.name + this.surname;
    }
}

class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName){
        return super.showFullName() +`${middleName}`;   
}

    showCourse(){
        let currentYear = new Date().getFullYear();
        let studCurrentCourse = (currentYear - this.year) + 1;
        return `${studCurrentCourse}`;
    }
}

const stud1 = new Student ("Petro", "Petrenko", 2018);
console.log(stud1.showFullName(" Petrovych"));
console.log("Current course: " + stud1.showCourse());


//Task 4
class Worker {

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    get showExp() {
        if (this.experience == undefined) return 1.2;
        return this.experience
    }

    set setExp(experience) {
        this.experience = experience;
    }

    showSalary() {
        this.salary = (this.dayRate * this.workingDays).toFixed(2);
        console.log(`${this.fullName} salary: ${this.salary}`);
    }

    showSalaryWithExperience() {
        this.salaryWithExperience = (this.dayRate * this.workingDays * this.showExp).toFixed(2);
        console.log(`${this.fullName} salary: ${this.salaryWithExperience}`);
    }

}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.2;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 15);
worker2.setExp = 1.5;
console.log(worker2.fullName);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 27);
worker3.setExp = 1.4;
console.log(worker3.fullName);
worker3.showSalaryWithExperience();

// ===== Sorting

function sortWorkers(workers, sortBy, orderBy = "asc") {
    if (!Object.keys(workers[0]).includes(sortBy)) {
        throw new Error(`Not a valid object property was passed: '${sortBy}'`);
    }

    workers.sort((a, b) => {
        return a[sortBy] - b[sortBy];
    });

    if (orderBy === "desc") {
        workers.reverse();
    }

    console.log(`Sorted by ${sortBy} ${orderBy}`);
    workers.forEach((e) => {
        console.log(`${e.fullName}: ${e.salaryWithExperience}`);
    });
}

sortWorkers([worker1, worker2, worker3], "experience")
sortWorkers([worker1, worker2, worker3], "salaryWithExperience", "desc")
sortWorkers([worker1, worker2, worker3], "experience22", "desc") // Error