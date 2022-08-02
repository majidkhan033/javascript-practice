// 0 1 1 2 3 5 8 13 21 . .. ... .... (Fibonacci Series)

function fibonacci(n){
    let n1=0;
    let n2 = 1;
    let sum=0;
    output=''
    for (i=0;i<n;i++){
        output += `${n1}`
        sum = n1+n2;
        n1 = n2;
        n2 = sum;
    }
    console.log(output)
    
}fibonacci(10)

//-------------------------------------------------------------------------------------------------------------------------------

//Armstrong number 

let num = 153;
n = ('' + num).length
sum = 0;
temp=num;
// n = a.length
// console.log(n)
while (num>0){
    sum += (num%10)**n
    // console.log(sum,num)
    num = (num/10)-(num/10)%1
    // console.log(num)
}
if (sum == temp){
    console.log('Armstrong')
}
else {
    console.log('Not an armstrong')
}

//-----------------------------------------------------------------------------------------------------------------------------------

//test 1
