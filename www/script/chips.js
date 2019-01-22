//Функция создания чипса (всплывающего окна)
function chips(message, timeremove = 3000) {
  let chips = document.createElement('div'); // генерируем блок
  chips.classList.add('chipp'); // присваиваем ему класс
  chips.innerHTML = message; // вставляем в блок какое-либо сообщение
  addChips(chips);
  setTimeout(function () {deleteChips(chips)}, timeremove)}; // формирование времени жизни чипса

  // удаление чипса
function deleteChips(chips) {
  chips.remove();
}

function addChips(chips) {
  let chipsField = document.querySelector('.chips-field');
  if (chipsField) {
      chipsField.appendChild(chips);
  }
  else {
      let chipsField = document.createElement('div');
      chipsField.classList.add('chips-field');
      document.querySelector('body').appendChild(chipsField);
      chipsField.appendChild(chips);
  }
}