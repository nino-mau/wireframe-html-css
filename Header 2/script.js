/** Scripts for sliding menu */

const menu = document.getElementById("menu_bar");
const checkbox = document.getElementById("menu_toggle");
const main = document.getElementById("content");

function handleSlidingMenu() {
    if (checkbox.checked === true) {
        menu.style.left = "0vw";
        main.style.marginLeft = "14vw";
        console.log("Menu shown");
    }
    else {
        menu.style.left = "-14vw";
        main.style.marginLeft = "0vw";
        console.log("Menu hidden");
    }
}

function checkboxEventListener() {
    checkbox.addEventListener('click', handleSlidingMenu);
}

checkboxEventListener();