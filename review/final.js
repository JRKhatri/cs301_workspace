
function pageLoad(){
    document.getElementById("but").onclick = swap;
    
}

function swap(){
    let input =document.getElementById("input").value;
    let output=document.getElementById("output").innerHTML;
    document.getElementById("input").value = output;
    document.getElementById("output").innerHTML = input;
    
    
   
}
window.onload = pageLoad;