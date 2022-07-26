// // less than 0
// // 0 - 5 - 10
// // 11 - 15 - 20
// // 21 - 25 - 30
// // more than 30
var num = 14;
if (num < 0){
    console.log(`${num} is less than zero`)
}
else if (num > 30) {
    console.log(`${num} is more than 30`)
}
else if ( num <= 5)
{
    console.log(`${num} falls under 0 - 5`)
}
else if (num <= 10) {
    console.log(`${num} falls under 5 - 10`)
}
else if (num <= 11) {
    console.log(`${num} falls under 10 - 11`)
}
else if (num <= 15) {
    console.log(`${num} falls under 11 - 15`)
}
else if (num <= 20) {
    console.log(`${num} falls under 15 - 20`)
}
else if (num <= 21) {
    console.log(`${num} falls under 20 - 21`)
}
else if (num <= 25) {
    console.log(`${num} falls under 21 - 25`)
}
else if (num <= 30) {
    console.log(`${num} falls under 25 - 30`)
}


// ---------------------------------------------------------------------------------------------------------------------------------------


// greatest of 2 numbers
var a = 17, b = 19;
if (a >= b){
    if (a > b) {
        console.log(`${a} is greater than ${b}`)
    }
    else  {
        console.log(`${a} and ${b} are equal`)
    }
}
if (a <= b){
    console.log(`${b} is greater than ${a}`)
}

// -------------------------------------------------------------------------------------------------------------------------

var a = 17, b = "15";
if (a >= +b)  
    if (a > b) {
        console.log(`${a} is greater than ${b}`)
    }
    else  {
        console.log(`${a} and ${b} are equal`)
    }

if (a <= +b){
    console.log(`${b} is greater than ${a}`)
}

// ---------------------------------------------------------------------------------------------------------------------------------------------

// var a='2', b=5
if (+a && +b){
    if (a<=b){
        if (a < b){
            console.log('a < b')
        }
        else {
            console.log("==")        
        }
    }
}
else {
    console.log([a>b])
}

// example
if (NaN){
    console.log("HI")
}

// -----------------------------------------------------------------------------------------------------------------------------

// example1
if (1){
    if (1){
        if (1){
            console.log('i am monjey`')
        } else {
            console,log("iam monkey2") 
        }console.log("iam really a monkey")
    }
    else{
        console.log('iam monkey3')
    }
    console.log('iam monkey4')
}else{
    console.log('iam monkeys leader')
}


// ------------------------------------------------------------------------------------------------------------------------------------

// example2
if (1){
    if (1){
        if (1){
            console.log("iam monkey1")
        }else if (2) {
            console.log("iam monkey2")
        }else {
            console.log("iam monkey3")
        }
        console.log('iam really a monkey')
    }
    // console.log('iam really a monkey')
    else if(1){
        if (1){
            console.log('iam monkey5')
        }
            console.log('iam monkey6')
    }
    console.log("iam monkey7")
}else {
    console.log("iam monkey's leader")
}    

// --------------------------------------------------------------------------------------------------------------------------

// example3
if (1){
    if (0){
        if (1){
            console.log("iam monkey1")
        }else if (2) {
            console.log("iam monkey2")
        }else {
            console.log("iam monkey3")
        }
        console.log('iam really a monkey')
    }
    // console.log('iam really a monkey')
    else if(1){
        if (1){
            console.log('iam monkey5')
        }
            console.log('iam monkey6')
    }
    console.log("iam monkey7")
}else {
    console.log("iam monkey's leader")
}    

// ----------------------------------------------------------------------------------------------------------------------------

// example method1
a = 15
if ((((a%3)!=0) && ((a%5)!=0))){
    console.log("Not a Fizz Buzz")
}
    if (((a%3)==0) || ((a%5)==0)){
        console.log("Fizz Buzz")
        if ((a%5)==0) {
            console.log("Buzz")
        }else if ((a%3)==0) {
            console.log("Fizz")
        }
    }

// -----------------------------------------------------------------------------------------------------------------------------------

// method 2
var a=21
if(((a%3)==0) || ((a%5)==0)){
    if (((a%3)==0) && ((a%5)==0)){
        console.log('fizz buzz')
    }
    else if (((a%5)==0)){
        console.log('buzz')
    }
    else{
        console.log('fizz')
    }
}
else{
    console.log('not a fizz buzz')
}


// ----------------------------------------------------------------------------------------------------------------------------------

// method 3
a = 211
if (((a%3==0) && ((a%5)==0))){
    console.log("Fizz Buzz")
}
else if ((a%5)==0){
    console.log("Buzz")
}
else if ((a%3)==0){
    console.log("Fizz")
}
else {
    console.log("Not a Fizz Buzz")
}