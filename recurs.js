let offset = 0 ;
function brecurs() {
document.querySelector('.test-2').style.left = offset + 'px';
offset = offset +5;
if (offset > 1000) { //терминальная заглушка
    return true;
}
setTimeout(brecurs, 50) // позволяет вызывать функцию с заданной задержкой
    }
