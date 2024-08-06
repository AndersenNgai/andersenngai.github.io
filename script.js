let button = document.querySelector("button");
function loremButton(){
    let longLorem = document.getElementById("fulltext");
    if (longLorem.style.display == "none" || longLorem.style.display == ""){
        longLorem.style.display = "block";
        button.innerText = "Press to hide the full text";
    }
    else{
        longLorem.style.display = "none";
        button.innerText = "Press to show the full text";
    }
}
button.addEventListener("click", loremButton);