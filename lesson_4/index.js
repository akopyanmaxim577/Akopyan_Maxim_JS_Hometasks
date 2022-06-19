//Task 1

let width = prompt("Enter width:");
let height = prompt("Enter height:");

function calcRectangleArea(width,height){
    let result = width*height;
    console.log(`Your result is ${result}`);
    if (result == 0 || result < 0 || isNaN(result)) throw Error ("Not valid numbers");

}


calcRectangleArea(width,height);

//Task 2


function checkAge(age) {
    try {
        if(String(age).length == 0) throw EvalError("Empty string was passed");
        if(isNaN(age)) throw EvalError("Oops, not a number was passed");
        if(Number(age) < 14) throw EvalError("Sorry, man, you're too young");
        console.log("Film is granted");
    } catch (err) {
        alert(`${err.name} \n ${err.message}`);
    }
}

const age = prompt("Please your age");

checkAge(age);

//Task 3
class MonthException {
    constructor(message) {
        this.message = 'Incorrect month number';
        this.name = 'MonthException';
    }
}

const mon = new MonthException();

function showMonthName(month) {
    if (month == 1)
    return 'January';
    if (month == 2)
    return 'February';
    if (month == 3)
    return 'March';
    if (month == 4)
    return 'April';
    if (month == 5)
    return 'May';
    if (month == 6)
    return 'June';
    if (month == 7)
    return 'July';
    if (month == 8)
    return 'August';
    if (month == 9)
    return 'September';
    if (month == 10)
    return 'October';
    if (month == 11)
    return 'November';
    if (month == 12)
    return 'December';
    else {
        throw new Error(mon.name + ': ' + mon.message);
    }
}

try {
    console.log(showMonthName(7));
}
catch (exception) {
    console.log(exception.message);
}

//Task 4

