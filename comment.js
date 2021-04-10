//обьявляем переменную для всего списка коментариев
let commentList = document.querySelector('.comment-list');
//обьявляем переменную для поля ввода коментариев
let commentField = document.querySelector('.comment-field');
// обьявляем переменную для спан поля , где будет отображаться счетчик символов
let charCounter = document.querySelector('.char-counter');
// обьявляем переменную для кнпки отправки коментария
let submitButton = document.querySelector('.buttoncom');

//при возникновении события getDataFormComment (onclick) запускается обработчик событий
function getDataFormComment() {


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
    //обнуляем значение использованых символов в поле ввода, что бы после отправке сообщения счетчик показывал 0
    charCounter.value = '0';
};



    commentField.oninput = function  () {
        //при каждом новом вводе символа публикует их количество в спец блок с помощью length
    charCounter.textContent = commentField.value.length;
// условие: если длина текста больше 15 символовв то
        if (commentField.value.length > 15) {
  // то заблокировать кнопку ввода
            submitButton.disabled = true;
        }
 // иначе: разблокировать кнопку ввода
        else {
            submitButton.disabled = false;
        }
};
