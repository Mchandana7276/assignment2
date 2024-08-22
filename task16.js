// 1. display even numbers upto n number (ask user for number)
var even = 0, n;
n = prompt("Enter any number:");
while (even < n) {
    even = even + 2;
    document.write(even + "<br>");
}

// 2. ask user for the input, whether char is vowel or consonant
function vowel() {
    var char = document.getElementById("char").value;

    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "O" || char === "U") {
        window.alert("Vowel");
    }
    else {
        window.alert("Consonant");
    }
}

// 3. count of even and odd number from 1 to 999
let oddNum = 0;
let evenNum = 0;
for (let index = 1; index < 999; index++) {
    if (index % 2 == 0) {
        evenNum++;
    }
    else {
        oddNum++;
    }
}
console.log("Total even number: " + evenNum);
console.log("Total odd number: " + oddNum);

// 4. count occurrence of a particular character in a string (hello: count of l is 2):loops
let str = 'Hello World';

let result = {};
for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (!result[ch]) {
        result[ch] = 1;
    }
    else {
        result[ch] += 1;
    }
}
console.log("The occurrence of each letter in given string is:", result);

// 5. sum and average of array elements [1, 9, 8]
let arr = [1, 9, 8]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum is: " + sum);

function calAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
const average = calAvg(arr);
console.log("Average:", average);

// 6. largest number in an array (do with loops)
function largestElement(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}
const num1 = [100, 15, 45, 20, 23];
const result1 = largestElement(num1);
console.log("The largest element in the array is:" + result1);