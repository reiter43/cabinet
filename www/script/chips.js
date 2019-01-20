//Функция создания чипса
function chips(message, timeremove = 3000) {
  let chips = document.createElement('div'); // генерируем блок
  chips.classList.add('chipp'); // присваиваем ему класс
  chips.innerHTML = message; // вставляем в блок какое-либо сообщение
  document.querySelector('body').appendChild(chips); //размещение блока чипса на странице
  setTimeout(function () {
    deleteChips(chips)
  }, timeremove); // формирование время жизни чипса
}
// удаление чипса
function deleteChips(chips) {
  chips.remove();
}