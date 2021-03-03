function addfirstLast(n){
    let last = n%10;
    let first =n;
    let sum = 0;
    while(first > 10){
        first = Math.floor(first/10)
    }
    sum =  last + first;
    

if (sum % 2===0){
    return true;
} else {
    return false;
}
}
console.log(addfirstLast(223));
