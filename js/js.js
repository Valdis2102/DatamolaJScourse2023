let burger_menu = document.getElementById('myTopnav');
let header_title = document.getElementById('header');

menu.onclick = function myFunction() {
    if (burger_menu.className === "topnav") {
        burger_menu.className += " responsive";
    } else if(burger_menu.className === "topnav responsive"){
        burger_menu.classList.remove(" responsive"); 
    }else{
        burger_menu.className = "topnav";
    };
    
    if (header_title.className === "header") {
        header_title.className += " th";
    } else {
        header_title.className = "header";
    };
};

let menu_item = document.getElementById('menu_it');
menu_item.addEventListener('click', hidden_menu);
function hidden_menu(){
    if (burger_menu.className === "topnav responsive") {
        burger_menu.classList.remove('responsive');
    } else{
        burger_menu.className = "topnav responsive";
    }

    if (header_title.className === "header th") {
        header_title.classList.remove("th");
    }else{
        header_title.className = "header th";
    }
}