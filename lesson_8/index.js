//Task1
function checkUppercase(text) {
    let regex = /^[A-Z]/;
    let result = regex.test(text);

    if (result) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character ");
    }
}

checkUppercase('regexp');
checkUppercase('RegExp');

//Task2
function checkEmail(email) {
    let regex = /\S+@\S+\.\S+/;

    let result = regex.test(email);

    if (result) {
        console.log(`${email} is VALID`);
    } else {
        console.log(`${email} is invalid`);
    }
    return result;
}

checkEmail("aqa@example.com");
checkEmail("aqa@example");
checkEmail("aqaexample.com");
checkEmail("@aqa!ss@example.com");

//Task3
let regex = /d(b+)(d)/i;

let str = "cdbBdbsbz";
console.log(str.match(regex));

// Task 4
function swapText(text) {
    let regex = /\s/;
    let arr = text.split(regex);
    console.log(arr[1] + ', ' + arr[0]);
}

swapText('Java Script');

// Task 5
function validCard(card) {
    let regex = /\d{4}-\d{4}-\d{4}-\d{4}/;
    if (card.match(regex)) {
        console.log('Validation sucсessful');
    } else {
        console.log('Validation is failed');
    }
}

validCard('5168-2258-4586-1235');
validCard('4787 2251 4586 1235');
validCard('472-2258-4586-1235');
validCard('47!/-2258-4586-1235');


//Task6
function checkRegex6(email) {
    let regex = /^(?!_)^(?!-)\w*-{0,1}\w*_{0,1}\w+@\w+\.\w+/;

    console.log(`${email} text validation: ${regex.test(email)}`);
}

checkRegex6("my_mail@gmail.com");
checkRegex6("#my_mail@gmail.com");
checkRegex6("my_ma--il@gmail.com");