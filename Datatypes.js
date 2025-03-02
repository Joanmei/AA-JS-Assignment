//Q.1
let firstName = 'Joan';
let lastName = 'Burgei';
let country = 'Kenya';
let city = ["Eldoret"];
let age = 24;
let isMarried = true;
let yearVariable = 2025;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof yearVariable);
console.log(Array.isArray(city));// checking if city is an array

//Q.2
console.log(typeof '10' === typeof 10);

//Q.3
console.log(parseInt('9.8') === 10);

//Q4

// Truthy values
console.log(Boolean(1));
console.log(Boolean("hello"));
console.log(Boolean([]));

// Falsy values
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

/*/Q.5
4 > 3 && 10 < 12

4 > 3 is true
10 < 12 is true
true && true results in true
4 > 3 && 10 > 12

4 > 3 is true
10 > 12 is false
true && false results in false
4 > 3 || 10 < 12

4 > 3 is true
10 < 12 is true
true || true results in true
4 > 3 || 10 > 12

4 > 3 is true
10 > 12 is false
true || false results in true
!(4 > 3)

4 > 3 is true
!true results in false
!(4 < 3)

4 < 3 is false
!false results in true
!(false)

!false results in true
!(4 > 3 && 10 < 12)

4 > 3 && 10 < 12 is true
!true results in false
!(4 > 3 && 10 > 12)

4 > 3 && 10 > 12 is false =!false results in true
!(4 === '4')
4 === '4' is false*/

// Logical expressions
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

//Q6 calculating are of a triangle
let base = prompt("Enter base of the triangle:");
let height = prompt("Enter height of the triangle:");
let area = 0.5 * base * height;
console.log("The area of the triangle is: " + area);

//Q7 Check if the user is old enough to drive
let birthYear = prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;

if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
    let yearsLeft = 18 - userAge;
    console.log(`You are ${userAge}. You will be allowed to drive after ${yearsLeft} years.`);
}

//Q8, 9, 10, 11, 12, 13, 14, and 15
let challenge = '30 Days Of JavaScript'
console.log(challenge)
challenge = challenge.toUpperCase();
console.log(challenge);
challenge = challenge.toLowerCase();
console.log(challenge)
console.log(challenge.slice(3));
console.log(challenge.slice(0, -19));
console.log(challenge.includes("Script"));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

//Q.16
let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

//Q.17 and 18
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('pt'));

//Q.19
let randomNum = Math.floor(Math.random() * 101);
console.log("Random number between 0 and 100:", randomNum);

//Q.20 Compare two numbers using if-else
let a = 40;
let b = 20;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}
// Compare two numbers using the ternary operator
let result = (a > b) ? "a is greater than b" : "a is less than b";
console.log(result);

//Q.21 Assign scores and determine grade
let scores = prompt("Enter student score:");
let grade;
if (scores >= 80 && scores <= 100) {
    grade = 'A';
} else if (scores >= 70 && scores < 80) {
    grade = 'B';
} else if (scores >= 60 && scores < 70) {
    grade = 'C';
} else if (scores >= 50 && scores < 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log(`The student's grade is: ${grade}`);
