<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="shortcut icon" href="img/fav/user.png" type="image/png">
    <title>Кабинет пользователя</title>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="libs/materialize/css/materialize.min.css" media="screen,projection" />


</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col l12 center-align">
                <h1 class="title-user-cabinet">
                    Личный кабинет пользователя <span class="title-user-cabinet__name">fff</span>
                </h1>
            </div>
        </div>
    </div>
    <h1>User Page</h1>
    <button id="logout">LogOUT</button>
    <!--кнопка для выхода из аккаунта-->

    <!-- Форма с данными пользователя, которые можно изменить -->
    <form>
        <div>name: <input type="text" name="name" id="signup-name"></div>
        <div>password: <input type="text" name="pass" id="signup-pass"></div>
        <div>birthday: <input type="text" name="birthday" id="signup-birthday"></div>
        <div>sex:
            <div> <input type="radio" value="male" name="sex" class="sex" checked >male</div>
            <div><input type="radio" value="female" name="sex" class="sex">female</div>
            <div><input type="radio" value="other" name="sex" class="sex">other</div>
        </div>
        <input type="submit" value="update" id="signup-submit">
    </form>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="libs/materialize/js/materialize.min.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>
</body>

</html>