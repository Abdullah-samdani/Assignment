"use strict";
// Question:1 Assign "Hello, World!" to this variable and print it.
let greeting = "Hello World";
console.log(greeting);
// Question:2 Assign integer values and perform arithmetic operations.
let num1 = 5;
let num2 = 3;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
//Question:3 Swap these values without using a new variable.
let a = 3;
let b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log("a =", a);
console.log("b =", b);
//Question:4 Now try assigning a number to it and see what happens.
// let My_string: string = "My Name is Abdullah";
// console.log(My_string);
// let My_string: number = 5;
// console.log(My_string);
//Question:5 Use the modulus operator to find the remainder of two numbers.
console.log(b % a);
//Question:6 Increment a variable's value by 1 using two different methods.
b = b + 1;
console.log("By First Method the value of b is", b);
b = b += 1;
console.log("By Second Method the value of b is", b);
//Question:7 Given three boolean variables, write expressions for AND, OR, and NOT gates.
//1. And Gate
let p = true;
let q = false;
let r = true;
let andResult = p && q && r;
console.log("AND gate result:", andResult);
//2. Not Gate
let P = !p;
let Q = !q;
let R = !r;
console.log("Not Gate result for 'p':", P);
console.log("Not Gate result for 'q':", Q);
console.log("Not Gate result for 'r':", R);
//3. Or Gate
let orResult = p || q || r;
console.log("OR gate result:", orResult);
//Question:8 Show examples of using compound assignment operators.
// Use +=, -=, *=, and /= on this variable.
let W = 10;
W += 2;
console.log(W);
W -= 2;
console.log(W);
W *= 2;
console.log(W);
W /= 2;
console.log(W);
//Question:9 Write a program to check if a number is even or odd.
function EvenOdd(num) {
    if (num % 2 == 0) {
        return `${num} is even`;
    }
    else {
        return `${num} is odd`;
    }
}
console.log(EvenOdd(5));
console.log(EvenOdd(10));
//Question:10 Check if a person is eligible to vote.
function Voting_Eligibility(num) {
    if (num > 18) {
        return `${num} Eligible for vote`;
    }
    else {
        return `${num} Not Eligible for Vote`;
    }
}
console.log(Voting_Eligibility(17));
console.log(Voting_Eligibility(19));
//Question:11 Grading System Assign a grade based on a numerical score.
function gradingSystem(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    }
    else if (score >= 80 && score < 90) {
        return "B";
    }
    else if (score >= 70 && score < 80) {
        return "C";
    }
    else if (score >= 60 && score < 70) {
        return "D";
    }
    else if (score >= 0 && score < 60) {
        return "F";
    }
    else {
        return "Invalid score";
    }
}
console.log("Score 80: Grade", gradingSystem(80));
console.log("Score 101: Grade", gradingSystem(101));
console.log("Score -10: Grade", gradingSystem(-10));
console.log("Score 67: Grade", gradingSystem(67));
