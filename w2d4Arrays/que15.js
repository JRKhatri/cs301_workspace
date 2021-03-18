/**
 * Do matrix addition and print result on matrix format for following:
 * 
 */
// let matrix = [[0,1,2,9,8,7], [6,5,4,3,4,5]];
// let result = [];

// for(let i =0; i < matrix.length -1; i++){
//     for(let j = 0; j<matrix[i].length; j++){
//         result[j] = matrix[i][j] + matrix[i+1][j];
//     }
// }
// console.log(result)


let matrix1 = [[0,1,2], [9,8,7]];
let matrix2 = [[6,5,4], [3,4,5]];

function addMatrics(arr1, arr2){
    let reslt = [];
    for(let i = 0; i < arr1.length; i++){
        let row = [];
        for (let j = 0; j < arr1[i].length; j++ ){
            row.push(arr1[i][j] + arr2[i][j]);
        }
        reslt.push(row);
    }
    return reslt;
}

console.log(addMatrics(matrix1, matrix2));


let mat =[[1,2,3], [3,2,1]];
let mat2 =[[1,1,1], [2,2,2]];

function sumMat(mat1){
    let sum =[];
    for(let i = 0; i< mat1.length-1; i++){
        for(let j =0; j<mat1[i].length; j++){
            sum.push(mat1[i][j] + mat1[i+1][j])

        }
    
    }
    return sum;
}
console.log(sumMat(mat))

let matt =[[1,2,3], [3,2,1]];
let matt1 =[[1,1,1], [2,2,2]];

function crossAdd(mat1,mat2){
    let sum =[];
    let k = 1;
    for(let i =0; i<mat1.length; i++){
        let row =[];
        for(let j =0; j<mat1[i].length; j++){
            row.push(mat1[i][j] + mat2[k][j])

        }
        sum.push(row)
        k--;
    }
    return sum;
}

console.log(crossAdd(matt,matt1));