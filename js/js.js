menu.onclick = function myFunction() {
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    };
    
    if (y.className === "header") {
        y.className += " th";
    } else {
        y.className = "header";
    };
};

menu_it.addEventListener('click', hidden_menu);
function hidden_menu(){
    console.log(x.className);
    if (x.className === "topnav responsive") {
        x.classList.remove('responsive');
    } else{
        x.className = "topnav responsive";
    }
    console.log(x.className);

    console.log(y.className);
    if (y.className === "header th") {
        y.classList.remove("th");
    }else{
        x.className = "header th";
    }
    console.log(y.className);
}