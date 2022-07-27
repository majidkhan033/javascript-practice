// Iterations

// while loop

// Syntax

// INITIALIZATION (start value)
// while (condition till terminating){
    // task / statement
    // Incrment/drcrement (step value)
// }

// program to print 1-10 numbers
i = 10
while (i >= 1) {
    console.log(i)
    i --
} 
     // i = i - 1
    // i -= = 1

    while(1){
        console.log("heya")
    }

// iteration - 1: i = 1; 1<=10; 1;(2)
// iteration - 2: i = 2; 2<=10; 2;(3)
// iteration - 3: i = 3; 3<=10; 3;(4)
// iteration - 4: i = 4; 4<=10; 4;(5)
// iteration - 5: i = 5; 5<=10; 5;(6)
// iteration - 6: i = 6; 6<=10; 6;(7)
// iteration - 7: i = 7; 7<=10; 7;(8)
// iteration - 8: i = 8; 8<=10; 8;(9)
// iteration - 9: i = 9; 9<=10; 9;(10
// iteration - 10: i = 10; 10<=10; ;(313)
i = 10
while (i<=10){
    console.log(i)
    i++;
}


// even numbers between 50 - 100 (method 1)
i = 50
while(i <= 100){
    console.log(i)
    i += 2;
}


// even method 2
i = 50
while(i <= 100){
    if (i % 2 == 0)
        console.log(i)
        i++
}


// odd method 1
i = 50
while(i <= 100){
    if (i%2!==0)
        console.log(i)
        i ++
}

// odd method 2
i = 51
while(i <= 100){
    console.log(i)
    i += 2
}

// with iteration count
i = 1
count = 0
while(i <= 100){
    count++
    console.log(i)
    i += 7;
}
console.log(`count is ${count}`)


// write a program to print multiples of 7 between 1 to 200
i = 1
count = 0
while(i <= 100){
    count++
    console.log(i)
    i += 7;
}
console.log(`count is ${count}`)


i = 1
count = 0
while(i <= 200){
    if ((i % 7) == 0) {
        console.log("multiple of 7")
    }
    i++;
}
console.log(`count is ${count}`)


// write a program to print 2 table
i = 1;
count = 0;
while (i <= 10){
        console.log(`2 x ${i} = ${i*2}`)
        count++;
        i++;
}
console.log(`count is ${count}`)




// write a program to print individual character of the string using while loop
i = 0;
a = "hello CFI"
while (i <= (a.length-1)) {
    console.log(a[i])
    i++;
}


// iterate over even characters of a string
i = 0;
a = "CodeForIndia"
while (i <= (a.length-1)){
    console.log(a[i])
    i+=2;
}


// iterate over an array
i = 0;
a = ['1','2','3','4']
while (i <= (a.length-1)){
    console.log(a[i])
    i++;
}


a = {1:'a',2:'b',3:'c',4:'d'}
console.log(a)
i = 0;
while (i<(a.length)){
    console.log(a[i])
    i++;
}


a = {1:'a',2:'b',3:'c',4:'d'}
i = 0;
while (i<=(a.length-1)){
    console.log(a[i])
    i++;
}


// iterate over key value pairs
a = {1:'a',2:'b',3:'c',4:'d'}
console.log(a)

l = Object.keys(a)
v = Object.values(a)
console.log(l.length)

i = 0;
while(i < l.length){
    console.log(l[i],':',v[i])
    i++;
}