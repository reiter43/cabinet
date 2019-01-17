//СКРИПТ ДЛЯ РАЗЛОГИНИРОВАНИЯ (ВЫХОД ИЗ АККАУНТА)
document.querySelector('#logout').onclick = function () { // вешаем на кнопку выхода функцию
    //Функция для разлогирования путем удаления куки из хранилища
    var c = document.cookie;
    console.log(c);
    var d = new Date();
    d.setTime(d.getTime() - (10 * 60 * 1000)); // устанавливаем время жизни куки на 10 минут назад
    var expires = d.toUTCString();
    document.cookie = `${c}; expires=${expires}; path=/`; // куки исчезает
    location.reload(); // страница перегружается и так как куки нет, то выкидывает из аккаунта и переводит на страницу с логином
}
