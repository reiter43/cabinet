// СКРИПТ ДЛЯ ФОРМЫ РЕГИТРАЦИИ
document.querySelector('#signup-submit').onclick = function (event) { //вешаем на  клик по кнопке регистрации функцию
    event.preventDefault(); // команда, останавливающая стандартную обработку формы и перезагрузку страницы
    // вводим переменные,отвечающие за поля формы
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('.sex'); // создаем массив из элементов с классом sex
    for (let i = 0; i < sex.length; i++) { // перебираем циклом данный массив с целью найти выбранную опцию
        if (sex[i].checked) {
            sex = sex[i].value; // присваиваем значение выбранной опции переменной sex
            break; // прерываем цикл
        }
    }
    let data = { // создаем массив из введенных ранее переменных
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex,
    }

    ajax('core/signup.php', 'POST', signup, data); // запускаем функцию ajax, отвечающую за передачу данных на сервер (параметры:адрес, тип метода, функция, выполняющаяся по результату ответа от сервера, наши данные)

    function signup(result) {
        console.log(result);
        // действия, взависимости от результата ответа сервера
        if (result == 2) {
            alert('Заполните поля');
        } else if (result == 1) {
            alert('Успех. Теперь можно войти!');
        } else {
            alert('Ошибка, повторите регистрацию позже!');
        }
    }
}

// СКРИПТ ДЛЯ ВВОДА ЛОГИНА (аналогичен предыдущему, только меньше массив данных и название выполняющейся функции "login")
document.querySelector('#login-submit').onclick = function (event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;

    let data = {
        "pass": pass,
        "email": email
    }

    ajax('core/login.php', 'POST', login, data);

    function login(result) {
        if (result == 2) {
            alert('Заполните поля');
        } else if (result == 0) {
            alert('Пользователь не найден!');
        } else {
            console.log(result); // выводится в консоль resalt.Он в виде строки. Это email
            result = JSON.parse(result); // распаршиваем полученную строку
            
            // Создаются куки-это файл с данными введеными при логинировании, который создается сервером и отправляется браузеру. Браузер приналичии куки разрешает вход, если куки нет, то предлагается снова залогиниться
            var d = new Date(); // создается новый объект Date
            d.setTime(d.getTime() + (10 * 60 * 1000)); // для Date устанавливается время
            var expires = d.toUTCString(); // формируется время жизни куки
            document.cookie = `email=${result.email}; expires=${expires}; path=/`; // устанавливаются куки (параметры:email, время жизни, домен)
            location.href = "cabinet.php"; // переброска пользователя на страницу личного кабинета cabinet.php. Т.е. , когда пользователь логинится корректно, то создаются куки под эти данные с оапределенным временем жизни и пользователь перенаправляется на cabinet.php (входит в личный кабинет) 
        }
    }
}