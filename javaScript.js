let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
    page.classList.toggle('theme1');
    page.classList.toggle('theme2');
};