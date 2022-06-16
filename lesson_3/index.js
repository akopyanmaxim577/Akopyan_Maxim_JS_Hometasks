// Task 1
const mas = [2,3,4,5];
let result = 1;
for (let i = 0; i < mas.length; i+=1){
    result *= mas[i];
}
//OR
let i = 0;
while (i < mas.length){
    result*= mas[i];
    i+=1;
}
console.log(result);

//Task 2
for (let i = 0; i <= 15; i+=1){
    if (i % 2 == 1)
        console.log(i + " odd");
    else{
        console.log(i + " even");
    }

}
//Task 3


function randArray(k){
    let array = [];
    for(let i = 0; i < k; i += 1){
        array.push(Math.floor(Math.random() * (500 - 1) + 1));
    }
    return array;
}

console.log(randArray(7));


//Task 4

let a = prompt("a");
let b = prompt("b");

function raiseToDegree(a, b) {
    console.log(Math.pow(Math.round(a), Math.round(b)));
};

raiseToDegree(a,b);

//Task 5
function findMin() {
    console.log(Math.min(...arguments));
  }
findMin(11, 0, 90, -22, 15);

//Task 6
function findUnique(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      for (let a = i + 1; a < arr.length; a += 1) {
        if (arr[i] === arr[a]) {
          console.log("false");
        }
      }
    }
    console.log("true");
  }
findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 7]);


//Task 7
function lastElem(arr, count){
    if(count == undefined) count = 1;
    console.log(`Last numbers: ${arr.splice(-count)}`);
}

lastElem([2, 2, 4], 2);

//Task 8

function capitalizeWords(str) {
    let newStr = "";
    let result = str.split(" ");

    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        newStr += result[i] + ' ';
    }
    return newStr;
}

console.log(capitalizeWords('i love java script'));



