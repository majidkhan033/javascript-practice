// program to print multiples of 3 --> fizz
//                  multiples of 5 --> buzz

//method 1
// var num = 10;
// if ((num % 3) == 0) {
//     console.log("fizz")
// }
// else if ((num % 5) == 0) {
//     console.log("buzz")
// }
// else {
//     console.log("not multiple of 3 and 5")
// }


//method 2
var n =15;
if ((n % 3) == 0) {
    console.log("fizz")
}
else if ((n % 5) == 0) {
    console.log("buzz")
}
else if (((n%3)!=0) && ((n%5)!=0)){
    console.log("not a multiple of 3 and 5")
}
else if (((n%3)==0) && ((n%5)==0)){
    console.log("Both multiple of 3 and 5")
}