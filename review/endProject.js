/* 6. A porcupine number is a prime number whose last digit is 9 and the next prime number that follows it 
 * also ends with the digit 9. For example, 139 is a porcupine number because:
a. it is a prime
b. it ends in a 9
c. The next prime number after it is 149 which also ends in 9.
Write a method named findPorcupineNumber which takes an integer argument n and returns the first 
porcupine number that is greater than n. So findPorcupineNumber(0) would return 139 (because 139 happens 
to be the first porcupine number) and so would findPorcupineNumber(138). But findPorcupineNumber(139) 
would return 409 which is the second porcupine number.
 */


   
// function isPrime(n){
//         let count= 0;
//         if(n==2){
//             return true;
//         }
        
//         for(let k=3; k < n; k++){
//             if(n % k ==0){
            
//                 return false;
//             }

//         }
//         console.log(n)
//         return true;
//     }


// function pNumber(int){
//     int++;
//     let pre = 0;
//     let flag = 0

//     for(let i = int; i < int+1; i++){

//         if(isPrime(int)){
           
//             if((int - 9) % 10 === 0){
//                flag += 1;

//                 if(flag < 2){
//                     pre = int;
//                 } else if(flag === 2){
//                     console.log("Answer");
//                     return pre;
//                 } else {
//                     flag = 0;
//                 }
//             } else {
//                 pre = 0;
//                 flag = 0;
//             }
//         } 
//        int++; 
//     }
// }
//     console.log(pNumber(919))




/**2. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
#two_sum
Input
nums =[2,7,11,15], target =9 
nums = [2,3,4], target = 6
nums=[3,3], target = 6
Output
[0,1], because nums[0]+nums[1]==9 
[0,2]
[0,1]
*/

// function twoSum(arr, tar){
//     let array =[];
//     let sum =0;
//     let idx1 = 0;
//     let idx2 = 1;
//     while(idx1 < arr.length-1){
//     if(arr[idx1] > tar){
//         continue;
//     }
//     sum = arr[idx1] + arr[idx2];
//     if (sum === tar){
//         array = [idx1, idx2];
//         return array;
//     }  if(idx2 < arr.length){
//         idx2++;
//     } else {
//         idx1++;
//         idx2 = 1;
//     }

//     }

//     }
    
//     console.log(twoSum([2,7,11,25],18))
//     console.log(twoSum([4,3,2],6))
//     console.log(twoSum([3,3],6))


//     /**
//      * 3. Write a function named mostFrequent() that given an array, finds the most frequent element in it.
//      *  If there are multiple elements that appear maximum number of times, returns any one of them.
//          #most_frequent
//      */

//   function mostFrequent(arr){
//     let sortArray = arr.sort();
//     console.log(sortArray);
//     let count1 =1;
//     let max =0;
//     let ele;
//     let element;
//     for(let i = 0; i < sortArray.length; i++){

//         if(sortArray[i]===sortArray[i+1]){

//             count1 +=1;

//             ele = arr[i];

//         } else {

//             if(count1 >= max ){

//             max = count1;
      

//             element = ele;
//             count1 = 1;
//         } else {
//             count1 =1;
//         }
//     }
//     }
//     console.log("max :" + max);
// return element;

// }

// console.log(mostFrequent([1,2,3,4,1,2,3,4,4,3,2,1,3,1,2,3,4]));


// /**
//  * 
// 4. Given an array of integers, write a function that finds the pair in array whose sum is closest to 0.
//  If there are more than one pair, return any pair.
// For e.g., [4,2, -1,3,2,-3]→[2,-2] #closest_to_zero
//  */
// function pairZero(arr){
//     let small = arr[0] + arr[1];
//     let pair =[arr[0],arr[1]];
//     let idx = 0;
//     let num =1;
    
//     while(idx<arr.length-1){ 
//         let diff = 0;
        
//         for(let i=num; i<arr.length; i++){
            
//          diff = arr[idx] + arr[i];
            

//          if(diff === 0){

//         pair=[arr[idx],arr[i]];
//         return pair;

//          }else if(diff < small){
//              small = diff;
//              pair = [arr[idx],arr[i]]

//          }
         
//         }
//         num++;
//         idx++; 
//     } 
//     return pair;
// }
// console.log(pairZero([4,2, -1,3,-2,-3]));
// console.log(pairZero([4,2,1,3,2,3]))
// console.log(pairZero([0,1,2,3,4,5,6]))
// console.log(pairZero([1,1,2,3,4,0,0]))


/**
 * 5. Write a function, that given two arrays representing two non-negative integers with digits, 
 * adds the two numbers, and return it as an array.
#add_two_numbers
Input
[3,4,2], [4,6,5] out [7,0,8]  explanation 342+465=807
 [1,1], [1,2,3] out [1,3,4] expl 11+123=134
 [1,1], [9,9]  out [1,1,0]  expl 11+99=110
 */

// function addTwoNumber(arr1, arr2){
//     let firstArr =Number(arr1.join(""));
//     let secArr = Number(arr2.join(""));
//     sum = firstArr +secArr;
//     console.log(sum);
//     result = String(sum); //result1 = result.split("");//gives string output
//     returnArr = []
//     for(let i = 0; i<result.length; i++){
//         returnArr[i] =Number(result[i]);
//     }
//     return returnArr;
// }

// console.log(addTwoNumber([3,4,2], [4,6,5]))
// console.log(addTwoNumber([1,1], [1,2,3]))
// console.log(addTwoNumber([1,1], [9,9]))


// let arr1 =[1,2,3]
// let xxx = Number(arr1.join(""));
// sum = xxx + 2;
// console.log(xxx)
// console.log(sum);


/**
 * 6. Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 and 0. #add_binary
Input
a="11", b="1"            Output "100" 
a="1010", b ="1011"              "10101"
 */

// let aaa ="11";
// let bbb = "1";

// function addBinary(str1, str2){
// let length1 =str1.length;
// let length2 = str2.length;

// let bin1 = Number(str1);
// let bin2 = Number(str2);

// let sum1 = 0;
// let sum2 = 0;

// for(let i = 0; i < length1; i++){
//     sum1 += Number(str1.substr(i,1)) * Math.pow(2,((length1-1)-i))
// }
// for(let i = 0; i< length2; i++){
//     sum2+= Number(str2.substr(i,1)) * Math.pow(2,((length2-1)-i))
// }
// totalSum = sum1 + sum2;

// let remainder ="";

// while(totalSum > 0){
//     remainder = totalSum % 2 + remainder;
//     totalSum = Math.floor(totalSum / 2);

// }
// return remainder;
// }
// console.log(addBinary("1010","1011"));


/*9. A strobogrammatic number is a number that looks the same when rotated 180 degree (looked upside down)
Write a function to determine if a number is strobogrammatic. The number is represented as string.
#strobogrammatic_number
Input Output
69   true
101   true 
88    true 
868   false
*/

// function strobo(string){
//     let oldArr = string.split("");

//     for(let i = 0; i < oldArr.length; i++){
//         if(oldArr[i]==="6"){
//             oldArr[i]="9"
//         } else if(oldArr[i]==="9"){
//             oldArr[i]="6";
//         }
//     }
    
//     let newStrNum = oldArr.reverse().join("");
//     return string === newStrNum;
    
   
// }
// console.log(strobo("1"))
// console.log(strobo("69"));
// console.log(strobo("101"));
// console.log(strobo("88"));
// console.log(strobo("868"));
// console.log(strobo("609"));
// console.log(strobo("1691"));
// console.log(strobo("8968"));
// console.log(strobo("9966"));


// /*10. Given an array containing n distinct numbers taken from 0,1,2,...,n, find the one that is missing from the array.
// #missing_number
// Input              Output 
// [3,0,1]              2 
// [9,6,4,2,3,5,7,0,1]  8
// */

// function findMissingNum(arrNum){
//     arrNum.sort((a , b)=> a - b);
//     let iniNum = arrNum[0];
//     let highestNum = arrNum[arrNum.length-1]
//     for(let i = 0; i < highestNum; i++){
//         if(arrNum[0] !== 0){
//             return 0;

//         } else if(arrNum[i] !== arrNum[i+1] -1){
//             console.log(i+1);
//             return i+1;
//         }

//         }
        
//     }
// console.log(findMissingNum([9,6,4,2,3,5,7,8,1,10,11,12,14,15,16]));

/**11. Given a sorted array and a target value, return the index if the target is found.
 *  If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array. #search_insert_position
Input             Output
 [1,3,5,6], 5       2 
 [1,3,5,6], 2       1 
 [1,3,5,6], 7       4 
 [1,3,5,6], 0       0
 
 */
// function searchTarget(arr, target){
    
// for(let i = 0; i< arr.length; i++){
//     if(arr[i] === target){
//         return i;
//     }
// }
// for(let i = 0; i< arr.length; i++){
//     if(target < arr[i]){
//         return i;
//         }
//     }
//     return arr.length;
// }

// console.log(searchTarget([1,3,5,6],5));
// console.log(searchTarget([1,3,5,6],2));
// console.log(searchTarget([1,3,5,6],7));
// console.log(searchTarget([1,2,5,6],0));
// console.log(searchTarget([1,2,5,6,9],8));
// console.log(searchTarget([1,2,5,6],3))

/**
 * 12. Given an integer array nums, find the contiguous subarray (containing at least one number) 
  which has the largest sum and return its sum.
#maxinum_subarray
Input                       Output     Explanation 
[-2,1,-3,4,-1,2,1,5,4]        6       [4,-1,2,1]
 */

// function contigSum(arr){
//     let sumMax = 0; 
//     for(let i = 0; i< arr.length; i++){
//         let sum =arr[i]
//         for(let j = i+1; j<arr.length; j++){
//             sum += arr[j];
//             if(sum > sumMax){
//                 sumMax = sum;
//             }
//         }
//     }
//     return sumMax;
    
// }
// console.log(contigSum([-2,1,-3,4,-1,2,1,-5,4]));


/**13. Given an array of integers and an integer k, find out whether there are two distinct
 *  indices i and j in the array such that nums[i] = nums[j] and the absolute difference 
 * between i and j is at most k.
#contains_duplicate_ii
Input                       Output 
nums=[1,2,3,1], k=3         true 
nums=[1,0,1,1], k=1         true 
nums= [1,2,3,1,2,3],k=2     false
 * 
 */
// function containsDuplicateindices(arr, target){

//     for(let i = 0; i < arr.length; i++){
//         for(let j =i+1; j<arr.length; j++){
//             if(arr[i]=== arr[j]){
//                 if(Math.abs(i - j)=== target){
//                     return true;
//                 }

//             }
//         }
//     }
//     return false;
// }
// console.log(containsDuplicateindices([1,2,3,1], 3));
// console.log(containsDuplicateindices([1,01,1], 1));
// console.log(containsDuplicateindices([1,2,3,1,2,3], 2));


/**
 * 14. Given a list of words and two words word1 and word2, return the shortest distance between 
 these two words in the list.
#shortest_word_distance
Assume the words ["practice", "makes", "perfect", "coding", "makes]
Input                                          Output
 word1 = "coding",  word2 = "practice"            3 
 word1 = "makes",   word2= "coding"               1
Note: You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

 */

// function shortestWordDistance(arr, word1, word2){
//     let index1;
//     let index2;
//     let minDist =arr.length;
    
//     for(let i =0; i < arr.length; i++){
//         if(arr[i]=== word1 ){
//             index1 = i;
//         } else if(arr[i]===word2){
//             index2 =i;
//         } 
//         let dist = Math.abs(index1 -index2);
//         if(dist < minDist){
//             minDist = dist;
//         }

//     }
//     return minDist;
// }
// console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"],"coding", "practice"));
// console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"],"coding", "makes"));
// console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"],"makes", "practice"));
// console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"],"practice", "coding"));
// console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"],"coding", "perfect"));


/**15. Given an array nums, write a function to move all 0's to the end of it while maintaining 
 * the relative order of the non-zero elements.
#move_zeroes
Example:
Input: [0, 1, 0, 12, 3]
Output: [1,3,12,0,0]
Note: you must do this in-place without making a copy of the array.
 * 
 */

// function moveZero(arr){
//     arr.sort((a,b)=> a-b);
//     for(let i =0; i<arr.length; ){
//         if (arr[i] !== 0){
//             break;
//          } else {
//          arr.push(arr.shift());
//         }
//     }
//     return arr;

// }
// console.log(moveZero([0, 1, 0, 12, 3]))


/**16. Write a function that takes a string as input and reverse only the vowels of a string. 
 * # reverse_vowels_of_a_string
  Input  - "hello"     "leetcode"
  Output - "holle"     "leotcede"
 * 
 */


//   function reverseVowels(text){
//       let arrText = text.split("");
      
//       let revText = text.split("").reverse();
//       console.log(arrText);
//       console.log(revText);
//       revWord=[];

//       for(let i = 0; i < arrText.length; i++){
//          if(!(arrText[i]== "a"|| arrText[i]=="e"|| arrText[i]=="i"|| arrText[i]=="o"|| arrText[i]=="u")){
//              revWord.push(arrText[i]);
//              continue;
//          } else{
//           for(let j = 0; j<revText.length; ){
//             if(!(revText[j]== "a"||revText[j]=="e"||revText[j]=="i"||revText[j]=="o"||revText[j]=="u")){
//             revText.shift();
//           } else{
//               revWord.push(revText.shift());
//               break;
//           }

//          }

//   }
//  }
//  return revWord;
// }
//   console.log(reverseVowels("hello"));
//   console.log(reverseVowels("leetcode"));

/**
 * 17. Write a function summaryRanges, such that given a sorted integer array nums, 
 * returns the smallest sorted list of ranges that cover all the numbers in the array exactly. 
 * That is, each element of nums is covered by exactly one of the ranges, and there is no integer x 
 * such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as: "a->b" if a != b
"a" if a == b
#summary_ranges

Input                   Output
[0,1,2,4,5,7]       ["0->2","4->5","7"] 
[0,2,3,4,6,8,9]     ["0","2->4","6","8->9"] 
[]                      []
[-1]                   ["-1"]
[0]                    ["0"]
 */

// function summaryRanges(arr){
//   let ranges =[];
//   let count =0;
//   for(let i =0; i<arr.length; i++){
//     if(Math.abs(arr[i]- arr[i+1]) !==1){
//       if(count < 1){
//       ranges.push(String(arr[i])) ;
//       } else {
//         ranges.push(arr[i -count] +"->" + arr[i]) ;
//         count =0;
//       }
//     } else {
//       count++;

//     }
//   }
//   return ranges;

// }
// console.log(summaryRanges([0,1,2,4,5,7] ));
// console.log(summaryRanges([0,2,3,4,6,8,9] ));
// console.log(summaryRanges([]));
// console.log(summaryRanges([-1]));
// console.log(summaryRanges([0]));

/*18. For two strings s and t, we say "t divides s" if and only if s = t + ... + t 
(t concatenated with itself 1 or more times)
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 #greatest_common_divisor_of_strings

 Input                                          Output 
 str1= "ABCABC", str2="ABC"                      "ABC" 
 str1="ABABAB", str2="ABAB"                     "ABAB"
str1="ABCDEF", str2="ABC"                       ""
    */                   

