document.querySelectorAll('.modal-show').forEach(function (element) { // получаем все элементы с классом modal-show
  element.onclick = showModal; // присваиваем по клику на каждый из объектов функцию showModal
});

function showModal() { // функция, открывающая модальное окно 
  let modalId = this.dataset.modal;
  document.querySelector(modalId).classList.remove('hide');
  document.onkeydown = function (event) {
    //закрываем окно на кнопку Esc
    if (event.keyCode == 27) {
       closeModal();
       clearForm(); // функция очистки формы
    }
  }
}

document.querySelectorAll('.modal-login__close').forEach(function (element) {
  //закрываем окно на кнопке закрыть
  element.onclick = function () {
    closeModal();
    clearForm(); // функция очистки формы
  }
})

document.querySelectorAll('.modal-login__wrap').forEach(function (element) {
  //закрываем окно на клике в области серой
  element.onclick = function () {
    closeModal();
    clearForm(); // функция очистки формы
  }
})

function closeModal() { // функция, закрывающая модальное окно 
  document.querySelectorAll('.modal-login__wrap').forEach(function (element) {
    element.classList.add('hide');
  });
  document.onkeydown = null;
}

function clearForm() { // очищаем форму, присваивая ее полям пустые значения
  document.querySelector('#signup-name').value = '';
  document.querySelector('#signup-pass').value = '';
  document.querySelector('#signup-email').value = '';
  document.querySelector('#signup-birthday').value = '';
}

document.querySelector('#log-in .modal-login').onclick = function (event) {
  event.stopPropagation(); //отменяем распространение(всплытие) события на конкретной форме, чтобы окно не закрывалось при клике по форме)
}
document.querySelector('#sign-up .modal-login').onclick = function (event) {
  event.stopPropagation(); //отменяем распространение(всплытие) события на конкретной форме, чтобы окно не закрывалось при клике по форме)
}

document.querySelector('#slider__checkbox').onchange = function () { // функция, удаляющая класс disabled с кнопки #signup-submit, активируя ее
  if (this.checked) {
    document.querySelector('#signup-submit').classList.remove('disabled');
  } else {
    document.querySelector('#signup-submit').classList.add('disabled');
  }
}