document.querySelector('.slider__read-rules').onclick = function () { // получаем кнопку с классом .read-rules и вешаем на нее по клику фунцию
    document.querySelector('.form-slider').style.marginLeft = '-348px'; // смещаем блок .form-slider влево с помощью левого отступа состояние
}

document.querySelectorAll('.slider__read-rules-back').forEach(function (element) { // Получаем массив из всех кнопок с калассом .read-rules-back и перебираем каждый его элемент
    element.onclick = function(){ // вешаем функцию на каждую кнопку с классом .read-rules-back 
    document.querySelector('.form-slider').style.marginLeft = '0';// смещаем блок .form-slider в исходное состояние
    }
}
)
