let input = document.getElementById("main");
let inputDisplay = document.getElementById("input");
input.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target.innerText == "1" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "1";    
    }else if(e.target.innerText == "2" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "2";
    }else if(e.target.innerText=="3" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "3";
    }else if(e.target.innerText == "4" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "4";
    }else if(e.target.innerText == "5" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "5";
    }else if(e.target.innerText == "6" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "6";
    }else if(e.target.innerText == "7" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "7";
    }else if(e.target.innerText == "8" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "8";
    }else if(e.target.innerText == "9" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "9";
    }else if(e.target.innerText == "0" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "0";
    }else if(e.target.innerText == "+" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "+";
    }else if(e.target.innerText == "/" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "/";
    }else if(e.target.innerText == "-" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "-";
    }else if(e.target.innerText == "x" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "*";
    }else if(e.target.innerText == "%" && e.target.tagName == "BUTTON"){
        inputDisplay.value += "%";
    }
    if(e.target.innerText == "=" && e.target.tagName == "BUTTON"){
        inputDisplay.value = eval(inputDisplay.value)
    }
    if(e.target.innerText == "AC" && e.target.tagName == "BUTTON"){
        inputDisplay.value = "";
    }
})
// let h = document.getElementById("testDis");
// let b = document.getElementById("test");
// function pressKey(key){
//     console.log(key);
    
// }


