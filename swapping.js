// method 1 (single line swap)
var a = 4;
var b = 5;
[a,b] = [b,a];
console.log("a = ", a)
console.log("b = ", b)


// method 2 (using temp variable)
var a = 4;
var b = 5;
var temp;
temp = a;
a = b;
b = temp;
console.log(a)
console.log(b)


// method 3 (using operators)
var a = 7;
var b = 6;
a = a + b;
b = a - b;
a = a - b;
console.log("value of a is " + a + " value of b is " +b)


// Method 4 (using bitwise XOR)
var a = 10;
var b = 20;
a ^= b;
b ^= a;
a ^= b;
console.log("Value of a=" + a + " value of b=" + a);