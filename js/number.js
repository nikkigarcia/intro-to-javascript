// number data type
var a = 10;
console.log(a);
var b = 100;
console.log(b);
var a = 20;
console.log(a);
var c = 0x1E; //hex values used for large numbers
console.log(c);
var d = 0.5;
console.log(d);
// addition
var sum = a + b;
console.log(sum);
// subtraction
var diff = d - c;
console.log(diff);
// multiplication
var mult = a * d;
console.log(mult);
// division
var div = b/a;
console.log(div);
// modulus
var mod = b % a;
console.log(mod);
var mod = b % c;
console.log(mod);


var e = '20'; //string because it's in quotes
console.log(e);
console.log(typeof e);
console.log(a === e); //comparing a to e a is a number e is a string stict comparison
console.log(a == e); //loose comparison