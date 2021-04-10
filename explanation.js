let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltipText = document.querySelector('.tooltip-text');

//задаем цикл через фо для всех и каждого элемента тултип батонс. Он будет повторятся для всех кнопок сколько бы их ни было
for (let tooltipButton of tooltipButtons) {
    tooltipButton.onclick = function () {
        // присовить текст классу tooltip text
        tooltipText.textContent = tooltipButton.dataset.tooltipText;
        // добавляется класс опенет тултипу
        tooltip.classList.add('opened');
    };
}


closeButton.onclick = function () {
    tooltip.classList.remove('opened');
};
