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


//---------------------------------------------------------------------------------------------------------------------------------
a = ""
for(i=1;i<=5;i++){
    a = a+i
    console.log(a)
}   

// -----------------------------------------------------------------------------------------------------------------------------

// 1  10
// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3 
// 9  2
// 10 1

for (i=1;i<=10;i++) {
    for (j=1;j<=10;j--){
        console.log(i,j)
    }
}

for (i=1;i<=10;i++){
    console.log(i, 11-i)
}

//-----------------------------------------------------------------------------------------------------------------------------

// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678

// method 1
let a = ''
count = 1
for(i=1;i<=8;i++){
    a = a+i
    console.log(a)
    count++;
}console.log(count)

// 1
// 11
// 111
// 1111
// 11111
let c = '';
for (i = 1; i<=5;i++){
    c = c + 1
    console.log(b)
}


// * * * * * 
// * * * * 
// * * *                                                                                                                                                                                                                                                                                                                                         *
// * *
// *

let b = ''
for (let i =5;i>=1;i--){
    b=''
    for (j=i;j>=1;j--){
        b = b + '* '
    } console.log(b)
}


//           *
//         * *
//       * * *
//   * * * * *

// let b = ''
// for (let i =5;i>=1;i--){
//     b=''
//     for (j=i;j>=1;j--){
//         b = b + '* '
//     } console.log(b)
// }

let p=''
for (let i=0;i<=5;i++){
    for (j=5-i;j>0;j--){
        p = p + ' *'
    }console.log(p)
}


a = ''
let spaces = 4;
for (let i=1;i<=space+1;i++){
    for (j=i;j<=n;j++){
        
    }

}



n=0
let pattern3 = '';
for(i=0; i<=n; i++){
  for(j=n-i; j>0; j--){
    pattern3 += " ";
  }
  for(j=1; j<=i; j++){
    pattern3 += '* ';
  }
  pattern3 += '\n';
}
console.log(pattern3);