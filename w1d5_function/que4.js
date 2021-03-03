/**Write a function to compute HCF of two numbers. Write it as a function expression.
 */

 let hcf = function (n1,n2){
     let h_factor=1;
     for(let i =1; i<=n1 && i<=n2; i++){
         if(n1%i === 0 && n2%i === 0){
             h_factor = i;
             
         }
     }
     return h_factor;

 }
 console.log(hcf(9,12));
