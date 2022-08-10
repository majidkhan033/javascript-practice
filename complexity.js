// Complexity of algorithms

// 1. Time Complexity - Big 'O' Notation
// 2. Space Complexity

// var a = 3;
// console.log(a)


// 0(n**2) - quadratic

// a = [1,2,3,4,5,6,7,8]
// for (i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         console.log(a[i],a[j])  // 1 ns
//     }
// }

//--------------------------------------------------------------------------------------------------------------------------------

// O(n**3) - cubic

// a = [1,2,3,4,5,6,7,8]
// for (i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         for(k=0;k<a.length;k++){
//             console.log(a[i],a[j])  // 1 ns
//         }
//     }
// }

//--------------------------------------------------------------------------------------------------------------------------------

// Binary Search                               // start + end / 2 --> formula for midpoint

// without recursion
// let a = [1,2,3,4,5,6,7,8,9];
// n = 7;
// function binary_search (a,n){
//     start_index = 0;
//     end_index = (a.length-1)
//     while (start_index <= end_index){
//         mid_index = Math.floor((start_index+end_index)/2)
//         if (a[mid_index] == n){
//             return mid_index
//         }
//         else if (a[mid_index] > n){
//             end_index = mid_index - 1;
//         }
//         else {
//             start_index = mid_index + 1;
//         }
//     }
        
// }console.log(binary_search(a,n))
    
//-------------------------------------------------------------------------------------------------------------------------------------

// With recursion

// let a = [1,2,3,4,5,6,7,8,9];
// n = 7;
// start_index = 0;
// end_index = (a.length-1)
// function binary_search (a, n, start_index, end_index){
//         mid_index = Math.floor((start_index + end_index)/2)
//         if (a[mid_index] == n){
//             return mid_index
//         }
//         else if (a[mid_index] > n){
//             end_index = mid_index - 1;
//         }
//         else {
//             start_index = mid_index + 1;
//         }
//         return binary_search (a, n, start_index, end_index)
// }
// console.log(binary_search (a, n, start_index, end_index))

//-------------------------------------------------------------------------------------------------------------------------------

// WAP to multiply 2 numbers without '*'

// let a = 13;
// let b = 12;
// function mul(a,b){
//     operand1 = a/2;
//     operand2 = b*2;
//     for (i=1;i<=b;i++){
//         if (operand1 == 1){
//             return ;
//         }
//         else if ((operand1 && operand2) % 2 == 0){
//             return operand2 
//         }
//     }
// }

// function mul(a,b){
//     let result = b;
//     console.log(a,b);
//     while(a>1){
//         a = Math.floor(a/2);
//         b = b*2;
//         if ((a % 2) != 0){
//             result += b;
//             console.log(a,b)
//         }
//         else console.log(a,b,'*')
//     }
//     return result;
// }
// result = mul(13,12)
// console.log('------')
// console.log(result)


// BONUS QUESTION
// find the index value of 2D array?

