/**
 * 1. Write a function that takes an array as input and returns second largest element of the array.
 */
function secondHighest(arr){
    arr.sort(sortNum);
   return arr[arr.length-2];
    
    }

function sortNum(a,b){
    return a-b;
}

fuction secLarge (arr){
    let largest = arr[0];
    let second = arr[0];
    for(let n of arr){
        if(n > largest){
            second = largest;
            largest = n;
        } else if(n > second){
            second = n;
        }
    }
}

console.log(secondHighest([2,4,6,3,8,6,8,5,9,19,1,2,4,20]))

/**
 * 2. An evenDominated array is an array that has count of even elements in the array more than 
 * the odd elements. Write a function that tests if an array is even dominated.
 */

function testEven(arr){
    let count1 =0;
    let count2 = 0
    for(let i =0; i<arr.length; i++) {   //can use    for(let n of arr){}
        if(arr[i] % 2=== 0){
            count2 +=1;
        } else {
            count1 +=1;
        }

    }
    return count2>count1;
    
}
 console.log(testEven([2,3,4,5,6,7,8,9,10,3,3]));


 /**3. Write a function deleteArrayElement that takes two parameters, first an array and second 
  * parameter is an array index to delete element from. You should do this without using any inbuilt 
  * functions.
  */
function deleteArrayElement(arr, ind){
    let newArray =[];
    let index =0;
    for(let i = 0; i<arr.length; i++){
        if( i == ind){
            continue;
        }
        newArray[index]= arr[i];    /// Or     newArray.push(arr[i])
        index +=1;
    }
return newArray;
}
console.log(deleteArrayElement([2,3,4,5,6,7],3));


/**
 * 4. Write a function to count total number of duplicate elements in an array.
 */
function totalDuplicate(arr){
    let count =0;
    
    for(let i = 0; i<arr.length-2; i++){
        for(let j= i+1; j<arr.length ; j++){
            if(arr[i]=== arr[j]){
                count +=1;
            }
        
        }
    }
    return count;
}

console.log(totalDuplicate([2,3,4,2,3,5,4,6,7,8,8,8,6,-1,0,-1]));


/**
 * 5. Two arrays are considered equal if they have exact same elements, even if order may differ. 
 * Write a function that tests weather two arrays are equal.
e.g. [1,2,3] is equal to [1,2,3] and [3,1,2] but not equal to [1,2] or [2,1,3,4]
 */

function equalArr(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    arr1.sort(sortNum);   // (a,b) => a - b;
    arr2.sort(sortNum);

    for(let i = 0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;

}

console.log(equalArr([1,2,3],[1,2,3,4]));
console.log(equalArr([1,2,3,4],[1,2,3,4,5]))
console.log(equalArr([1,2,3,4],[4,3,2,1]))