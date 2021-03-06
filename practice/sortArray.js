
 function myComparator(a,b){
    return a-b;
}

let mycomparator = function(a,b){
    return a-b;
}

let comparator = (a, b) => a-b ;

let arr1 = [1,3,6,2,8,0,1,4,23,21,56,5];

arr1.sort(myComparator);

arr1.sort(function(a,b) {    // annonymous function;
    return a-b;
});

arr1.sort( (a,b) => a -b)  //for single statement do not need return keyword

