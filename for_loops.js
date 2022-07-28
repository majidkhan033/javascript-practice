// for loops
// for (initialization;CSSConditionRule;increment/decrement)

// for (i=1;i<=5;i++){
//     console.log(i)
// }

// for loops to print 10 to 5 for loop?
for (i=10;i>=5;i--){
    console.log(i)
}

// iteration - 1: i = 10; i>=5; 10
// iteration - 2: i = 9; i>=5; 9
// iteration - 3: i = 8; i>=5; 8
// iteration - 4: i = 7; i>=5; 7
// iteration - 5: i = 6; i>=5; 6
// iteration - 6 : i = 5; i>=5; 5


// program to print even numbers between 50 - 100
count=0;
for (i=50;i<=100;i++){
    count++;
    if(i % 2 ==0){
        console.log(i)
    }
}console.log(`count is ${count}`)


//WAP to print odd numbers between 1-100
count=0;
for (i=1;i<=100;i++){
    count++;
    if (i%2!=0)
    console.log(i)
}console.log(`count is ${count}`)


count = 0;
for (i=1;i<=100;i+=2){
    console.log(i)
}console.log(`count is ${count}`)



// write a program to print multiples of 7 between 1 to 200
count=0;
for(i=0;i<=100;i+=7){
    count++;
    console.log(i)
}console.log(`count is ${count}`)


// write a program to print 10 table
for (i=1;i<=10;i++){
    console.log(`10 x ${i} = ${i*10}`)
}

// // nested for loop
for (i=0;i<=2;i++){
    for(j=0;j<=2;j++){
        console.log(i,j)
    }
}


// print each character of a string
a = "helloCFI"
for (i = 0; i<=(a.length-1);i++){
    console.log(a[i])
}


// iterate over each array
a = ['1','2','3','4']
for (i=0;i<=(a.length-1);i++){
    console.log(a[i])
}


// how to add ** between string characters
// for loop
a = "code"
b = ''
for (i=1;i<=a.length-1;i++){
    b = b+'**'+a[i]
}
console.log(a[0]+b)


// while loop
a = 'code'
b = ''
i = 1
while (i<=a.length-1){
    b = b+'**'+a[i]
    i++
}
console.log(a[0]+b)



// add numbers one after other
a = 1
b = ''
for (a=1;a<=10;a++){
    b =b+a+' '
}
console.log(b)


// print the pattern 
// *
// **
// ***
// ****
// *****

a = ''
for(i=1;i<=5;i++){
    a = a+'*'
    console.log(a)
}   


a = ""
for(i=1;i<=5;i++){
    a = a+i
    console.log(a)
}   