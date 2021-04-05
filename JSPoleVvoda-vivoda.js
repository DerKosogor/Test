function getDataForm() {
    //обьявляем переменную для воля вывода
    let conclusion = document.querySelector('.conclusion');
    //обьявляем переменную для воля ввода
    let input = document.querySelector('.inputData');
    //выводим текст из ввод в поле вывода
    conclusion.textContent = input.value;
}