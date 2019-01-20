//Инициализация календаря (взято из materialise)
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "dd-mm-yyyy"
    });
});

//СКРИПТ ДЛЯ ИЗМЕНЕНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ  (с помощью куки вытаскиваем все данные пользователя, которому куки принадлежит )
let userEmail = getCookie('email');
console.log(userEmail);
ajax('core/get_user_data.php', 'POST', getUserData, {
    "email": userEmail
}); // посылаем запрос на сервер для получения оттуда данных

function getCookie(cname) { // функция, позволяющия вычитать из куки определенные данные ( в нашем случае сам эл. адрес)
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUserData(result) { // функция, обрабатывающая ответ от сервера
    result = JSON.parse(result); // превращаем, полученный от сервера ответ в виде строки в массив
    console.log(result);
    //записываем в выбранные поля , полученные значения
    document.querySelector('#signup-name').value = result.name;
    document.querySelector('#signup-pass').value = result.password;
    document.querySelector('#signup-birthday').value = result.birthday;
    document.querySelector(".title-user-cabinet__name").innerHTML = result.name; //записываем имя пользователя в заголовок
    M.updateTextFields(); // метод очистки полей,чтобы label не налазил на значение
}

document.querySelector('#signup-submit').onclick = function (event) { // по клику запускаем функцию
    event.preventDefault(); // отключаем стандартную обработку
    let s = document.querySelectorAll('.sex'); // создаем массив из элементов с классом sex
    for (let i = 0; i < s.length; i++) { // перебираем циклом данный массив с целью найти выбранную опцию
        if (s[i].checked) {
            s = s[i].value; // присваиваем значение выбранной опции переменной s
            console.log(s);
            break; // прерываем цикл
        }
    }
    let updateData = { // создаем массив из данных, которые планируется менять
        "email": userEmail,
        "name": document.querySelector('#signup-name').value,
        "pass": document.querySelector('#signup-pass').value,
        "birthday": document.querySelector('#signup-birthday').value,
        "sex": s,
    };
    ajax('core/update_user_data.php', 'POST', updateUserData, updateData); // отправляем запрос на сервер

}

function updateUserData(result) { // функция, обрабатывающая ответ сервера
    console.log(result);
    if (result == 1) {
        chips('Данные успешно обновлены!', 1500)
        document.querySelector(".title-user-cabinet__name").innerHTML = document.querySelector('#signup-name').value // перезаписываем новое имя пользователя в заголовок
    } else {
        chips('Ошибка обновления', 1500)
    }
}