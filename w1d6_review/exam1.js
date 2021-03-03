function isStacked(n){
    let sum = 0;
    
    for( let i =1; i<=n; i++){
        sum = sum +i;
        if (sum === n){
            return true;
        } else if( sum > n){
            return false;
        }
    }
    }
    console.log(isStacked(5));

    
