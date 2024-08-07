function activateDarkMode(){
    let navbar = document.querySelector("nav");
    navbar.style.backgroundColor = "#568BA4";
    navbar.style.color = "#ffffff";
    let navbarLinks = document.querySelectorAll("#navbar a");
    navbarLinks.forEach(navbarLinksWhite);
    document.querySelector("body").style.backgroundColor = "#000000";
    articles = document.querySelectorAll(".article");
    articles.forEach(articlesLightBlue);
}
function navbarLinksWhite(link){link.style.color = "#ffffff"};
function articlesLightBlue(ar){ar.style.backgroundColor = "#568BA4"};
let darkModeButton = document.getElementById("darkmode");
darkModeButton.addEventListener("click", activateDarkMode);