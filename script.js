function activateDarkMode(){
    document.querySelector("body").style.color = "#ffffff";
    let navbar = document.querySelector("nav");
    navbar.style.backgroundColor = "#568BA4";
    navbar.style.color = "#ffffff";
    let navbarLinks = document.querySelectorAll("#navbar a");
    navbarLinks.forEach(navbarLinksWhite);
    document.querySelector("body").style.backgroundColor = "#000000";
    articles = document.querySelectorAll(".article");
    articles.forEach(articlesLightBlue);
    let header = document.querySelector("header");
    if (header != null){
        header.style.backgroundColor = "#324376";
        header.style.color = "#ffffff";
    }
    let text = document.getElementById("text");
    if (text != null){text.style.backgroundColor = "#324376"}
    let aside = document.querySelector("aside");
    if (aside != null){aside.style.backgroundColor = "#324376"}
    darkModeButton.style.display = "none";
    lightModeButton.style.display = "inline";
}
function navbarLinksWhite(link){link.style.color = "#ffffff"};
function articlesLightBlue(ar){ar.style.backgroundColor = "#568BA4"};
let darkModeButton = document.getElementById("darkmode");
darkModeButton.addEventListener("click", activateDarkMode);

function activateLightMode(){
    document.querySelector("body").style.color = "#000000";
    let navbar = document.querySelector("nav");
    navbar.style.backgroundColor = "#F76C5E";
    navbar.style.color = "#000000";
    let navbarLinks = document.querySelectorAll("#navbar a");
    navbarLinks.forEach(navbarLinksBlack);
    document.querySelector("body").style.backgroundColor = "#F5DD90";
    articles = document.querySelectorAll(".article");
    articles.forEach(articlesDarkBlue);
    let header = document.querySelector("header");
    if (header != null){
        header.style.backgroundColor = "#F68E5F";
        header.style.color = "#000000";
    }
    let text = document.getElementById("text");
    if (text != null){text.style.backgroundColor = "#F68E5F"}
    let aside = document.querySelector("aside");
    if (aside != null){aside.style.backgroundColor = "#F68E5F"}
    lightModeButton.style.display = "none";
    darkModeButton.style.display = "inline";
}
function navbarLinksBlack(link){link.style.color = "#000000"};
function articlesDarkBlue(ar){ar.style.backgroundColor = "#324376"};
let lightModeButton = document.getElementById("lightmode");
lightModeButton.addEventListener("click", activateLightMode);