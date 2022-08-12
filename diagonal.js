// import readlineSync from 'readline-sync'
// import colors from 'colors.cli'
// import { MatrixInput,PrintMatrix } from "./color_matrix.js";

// function PrincipalDiagonal(){
//     let MatrixA = MatrixInput('Matrix A')
//     //console.log(MatrixA)
//     console.log(`Matrix A is : `)
//     PrintMatrix(MatrixA)
//     let left = 0;
//     let right = 0;
//     for (let i=0,j=2;i<3,j<=0;i++,j--){
//         console.log(i,j)
//     }
//     console.log(left)
//     console.log(right)
// }PrincipalDiagonal()


import readlineSync from 'readline-sync'
import color from 'colors-cli'
import { MatrixInput,PrintMatrix } from "./color_matrix.js";

function Diag_mat(){
    let matrix = MatrixInput(Diagonal)
    PrintMatrix(matrix)

    if(matrix.length != matrix[0].length){
        console.log("Not a square matrix")
    }
    else {
        let left_sum = 0
        let right_sum = 0
        for (let i=0, j=matrix.length-1; i<matrix.length,j>=0;i++,j--){
            left_sum += matrix[i][j]
            right_sum += matrix[i][j]
        }
        let diff = left_sum - right_sum
        if (diff >= 0) console.log(diff);
        else console.log(diff * -1)
    } 
}
Diag_mat()

function Print_color_Matrix(matrix,diag){
    for (let i=0;i<matrix.length;i++){
        var res = ""
        for (let j=0;j<matrix[i].length;j++){
            if ((i==j) && (diag == 'left')){
                res+=(color.blue(matrix[i][j]))+' '
            }
            else if ((i+j==(matrix.length-1)) && (diag == 'right')){
                res+=(color.red(matrix[i][j]))+' '
            }
           else{
            res+=(matrix[i][j])+' '
           } 
        }
        console.log(res)
    }
}