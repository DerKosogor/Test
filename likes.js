//обьявляем переменную для кнопки сердечко
let heart = document.querySelector('.heart');
//обьявляем переменную для вложенного в срдечко тега span, оно отображает число лайков
let likesNumber = document.querySelector('.likes-number');

heart.onclick = function () {
    //переменная counter++; особая, она добавляет 1 (что бы добавить 2 или более надо писать так counter += 2;)
    //ниже -если у кнопки сердечко есть класс added то выполнить условие убрать у переменной лайк намбер 1
    if (heart.classList.contains('added') ) {
        likesNumber.textContent--;
    }
    //если класса added нет то выполнить +1
    else {
        likesNumber.textContent++;
    }
//добавляет кнопке сердечко класс added
    heart.classList.toggle('added');
};


