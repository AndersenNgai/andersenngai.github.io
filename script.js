let longLorem = document.getElementById("fulltext");
let button = document.querySelector("button");
function loremButton(){
    if longLorem.style.display == "hidden"{
        longLorem.style.display = "block";
    }
    else{
        longLorem.style.display = "hidden"
    }
}
button.addEventListener("click", loremButton);