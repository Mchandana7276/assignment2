// 1. given number is multiple of 3 or not e.g.10900
function divisibleBy3(i) {
    if (i % 3 == 0) {
        console.log("10900 is divisible by 3");
    }
    else {
        console.log("Not divisible");
    }
}
let i = 10900;
divisibleBy3(i);

// 2. check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not
let str = "Hello there! Welcome to GeeksforGeeks";
let flag = str.includes("Geeks");
console.log(flag);

// 3. calculate complex interest ((p * r )* t) / 100 ): take principle, rate and time from user
function answer() {
    var amount_input = parseInt(document.getElementById("amount").value);
    var rate_input = parseInt(document.getElementById("rate").value);
    var time_input = parseInt(document.getElementById("time").value);

    var interest = (amount_input * rate_input * time_input) / 100;
    var total = interest + amount_input;

    document.getElementById("output_1").innerHTML = amount_input;
    document.getElementById("output_2").innerHTML = interest;
    document.getElementById("output_3").innerHTML = total;
}