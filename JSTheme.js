let page = document.querySelector('.page');
//обьявляем переменную для класса пейдж
let themeButton = document.querySelector('.theme-button');
//обьявляем переменную для обьявляем переменную для кнопки сменить тему

//при нажатии на кнопку сменить тему в один клик
themeButton.onclick = function() {
    //добавить подкласс тема один если его нет, убрать если есть
    page.classList.toggle('theme1');
    //добавить подкласс тема два если его нет, убрать если есть
    page.classList.toggle('theme2');
};
