/**
 * Do matrix addition and print result on matrix format for following:
 * 
 */
let matrix = [[0,1,2,9,8,7], [6,5,4,3,4,5]];
let result = [];

for(let i =0; i < matrix.length -1; i++){
    for(let j = 0; j<matrix[i].length; j++){
        result[j] = matrix[i][j] + matrix[i+1][j];
    }
}
console.log(result)
