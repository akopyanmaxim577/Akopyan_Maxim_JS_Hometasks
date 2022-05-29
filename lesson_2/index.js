//Task 1

let x = 1;
let y = 2;

let res1 = 1 + "2";
console.log(res1);
console.log(typeof res1); 

let res2 = Boolean(x)+"2";
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x) || Boolean(y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x/0 - y/0;
console.log(res4); // NaN
console.log(typeof res4); // "number"


//Task 2
let z = prompt("Введіть змінну");
if (z > 0 && z % 2 == 0){
    console.log(`Змінна прошла на перевірку ${z}`);
} else {
    console.log("Змінна не прошла перевірку");
}



//Task 3
const arr = [];
arr.push(1);
arr.push("Hello world")
arr.push(true);
arr.push(null);
console.log(arr);
arr[4]= prompt("Введіть дані");
console.log(arr[4]);
arr.shift(arr);
console.log(arr);

//Task 4
let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join("*"));
const a = cities.toString();
console.log(typeof a);


//Task 5
let age = prompt("Введіть ваш вік:");
if (age >= 18){
    alert("Ви досягли повнолітнього віку");
}else{
    alert("Ви ще надто молоді");
}

console.log("Task 6");

const a = Number(prompt("Please enter 'a' side"));
const b = Number(prompt("Please enter 'b' side"));
const c = Number(prompt("Please enter 'c' side"));

const validTriangle = (a + b) > c && (c + b) > a && (c + a) > b;

if( !validTriangle ) console.log(`Incorrect data. \n Cannot build triangle from passed values`);
else{
    const halfPerimeter = (a + b + c) / 2;

    const square = Math.sqrt( halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));

    console.log(`Triangle square: ${square.toFixed(3)}`);


    const isRectangle = (a**2 + b**2 == c**2) || (c**2 + b**2 == a**2) || (c**2 + a**2 == b**2)
    console.log(`Is Triangle a rectangle: ${isRectangle}`);
}

// Task 7

console.log("Task 7");

const currentTime = new Date();
const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

const night = 23 * 60;
const morning = 5 * 60;
const day = 11 * 60;
const evening = 17 * 60;


if(currentMinutes >= night && currentMinutes < morning) console.log("Good night");
else if(currentMinutes >= morning && currentMinutes < day) console.log("Good morning");
else if(currentMinutes >= day && currentMinutes < evening) console.log("Good day");
else console.log("Good evening");

switch(currentMinutes){
    case currentMinutes >= night && currentMinutes < morning:
        console.log("Switch: Good night");
        break;
    case currentMinutes >= morning && currentMinutes < day:
        console.log("Switch: Good morning");
        break;
    case currentMinutes >= day && currentMinutes < evening:
        console.log("Switch: Good day");
        break;
    default:
        console.log("Switch: Good evening");
}
