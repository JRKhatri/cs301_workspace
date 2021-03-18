function pageLoad(){
    document.getElementById("butBmi").onclick =bmiCalculation;
    document.getElementById("clear").onclick = clear;
    
}

function bmiCalculation(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    let bmiVal = Math.round(weight / Math.pow(height,2));
    displayResult(bmiVal);

}
function clear(){
    document.getElementById("height").value =NaN;
    document.getElementById("weight").value =NaN;
    document.getElementById("spanResult").innerHTML="";

}


function displayResult(val){
   let resultBmi= document.getElementById("spanResult");
   resultBmi.innerHTML = val;
   if(val < 18.5){
       colorYellow();
   } else if(val < 24.9){
       colorGreen();
   } else if(val < 29.9){
       colorOrange();
   } else {
       colorRed()
   }
   }
   function colorYellow(){
    let resultBmi= document.getElementById("spanResult");
    resultBmi.className="yellow";
    
    }
    function colorGreen(){
        let resultBmi= document.getElementById("spanResult");
        resultBmi.className="green";
        
        }
        function colorOrange(){
            let resultBmi= document.getElementById("spanResult");
            resultBmi.className="orange";
            
            }
            function colorRed(val){
                let resultBmi= document.getElementById("spanResult");
                resultBmi.className="red";
                
                }
    

   

   




window.onload =pageLoad;
/**
 * BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
 */