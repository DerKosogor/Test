let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
    page.classList.toggle('theme1');
    page.classList.toggle('theme2');
};

function getDataForm() {
    let conclusion = document.querySelector('.conclusion');
    let input = document.querySelector('.inputData');
    conclusion.textContent = input.value;
}