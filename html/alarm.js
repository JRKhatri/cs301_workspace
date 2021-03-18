

function goClick(){
    let btn = document.getElementById("body");
    btn.style.backgroundColor = "red";
    
}

window.onload = ()=>{
    document.getElementById("go").onClick = goClick;
};