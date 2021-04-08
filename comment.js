//при возникновении события getDataFormComment (onclick) запускается обработчик событий
function getDataFormComment() {
//обьявляем переменную для всего списка коментариев
let commentList = document.querySelector('.comment-list');
//обьявляем переменную для поля ввода коментариев
let commentField = document.querySelector('.comment-field');


//обявляем переменную для создать новый элемент пункт списка
    let newComment = document.createElement('li');
    //добавить класс юзеркоммент новому пункту списка
    newComment.classList.add('user-comment');
    //занести текст из поля ввода в новый пункт списка
    newComment.textContent = commentField.value;
    //очистить поел ввода
    commentField.value = '';
    //добавляем новое содержимое к старому а именно, в список коментариев добавляем новый пункт с текстом
    commentList.append(newComment);
};
