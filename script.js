function activateDarkMode(){
    let navbar = document.querySelector("nav");
    navbar.style.backgroundColor = "#568BA4";
    navbar.style.color = "#ffffff";
    let navbarLinks = document.querySelectorAll("#navbar a");
    navbarLinks.forEach(navbarLinksWhite);
    document.querySelector("body").style.backgroundColor = "#000000";
    articles = document.querySelectorAll(".article");
    articles.forEach(articlesLightBlue);
    darkModeButton.style.display = "none";
    lightModeButton.style.display = "inline";
}
function navbarLinksWhite(link){link.style.color = "#ffffff"};
function articlesLightBlue(ar){ar.style.backgroundColor = "#568BA4"};
let darkModeButton = document.getElementById("darkmode");
darkModeButton.addEventListener("click", activateDarkMode);

function activateLightMode(){
    let navbar = document.querySelector("nav");
    navbar.style.backgroundColor = "#F76C5E";
    navbar.style.color = "#000000";
    let navbarLinks = document.querySelectorAll("#navbar a");
    navbarLinks.forEach(navbarLinksBlack);
    document.querySelector("body").style.backgroundColor = "#F5DD90";
    articles = document.querySelectorAll(".article");
    articles.forEach(articlesDarkBlue);
    lightModeButton.style.display = "none";
    darkModeButton.style.display = "inline";
}
function navbarLinksBlack(link){link.style.color = "#000000"};
function articlesDarkBlue(ar){ar.style.backgroundColor = "#324376"};
let lightModeButton = document.getElementById("lightmode");
lightModeButton.addEventListener("click", activateLightMode);