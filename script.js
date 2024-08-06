let button = document.querySelector("button");
function showLorem(lor){lor.style.display = "block";}
function hideLorem(lor){lor.style.display = "none";}
function loremButton(){
    let longLorem = document.querySelectorAll(".longlorem");
    if (button.innerText == "Press to show the full text"){
        button.innerText = "Press to hide the full text";
        longLorem.forEach(showLorem);
    }
    else{
        button.innerText = "Press to show the full text";
        longLorem.forEach(hideLorem);
    }
}
button.addEventListener("click", loremButton);