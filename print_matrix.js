import readlineSync from "readline-sync"
function MatrixInput(name) {
    let rows = readlineSync.questionInt("Enter number of rows: ")
    let cols = readlineSync.questionInt("Enter number of columns: ")
    console.log(`Given matrix is ${name} ${rows} x ${cols} dimension`)

    let MatrixA = new Array(rows)
    for (let i=0;i<MatrixA.length;i++){
        MatrixA[i] = new Array(cols)
    }

    for (let i = 0;i<rows;i++) {
        for(let j=0;j<cols;j++){
            MatrixA [i][j] = readlineSync.questionInt(`Enter elements ${i}, ${j} : `);
        }
}
return MatrixA
}
// console.log(MatrixInput())

// let mat = MatrixInput()
function PrintMatrix(matrix){
    for(let i=0;i<matrix.length;i++){
        var res = ""
        for (let j=0; j<matrix[i].length;j++){
            res += (matrix[i][j])+' '
        }
        console.log(res)
    }
}
// PrintMatrix(mat)

export {MatrixInput, PrintMatrix}