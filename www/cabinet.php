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
    <link type="text/css" rel="stylesheet" href="css/style.css" />


</head>

<body>

    <div class="container ">
        <div class="row">
            <div class="col l12 center-align">
                <h1 class="title-user-cabinet">
                    Личный кабинет пользователя <span class="title-user-cabinet__name"></span>
                </h1>
                <button id="logout" class="waves-effect waves-light btn ">
                    <i class="material-icons right">send</i>
                    logout
                </button>
            </div>
        </div>



        <!-- Форма с данными пользователя, которые можно изменить -->
        <div class="row">
            <div class="col l6 ">
                <form>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="signup-name" type="text" class="validate">
                            <label class="active" for="signup-name">Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="signup-pass" type="text" class="validate">
                            <label class="active" for="signup-pass">Password</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="signup-birthday" type="text" class="datepicker">
                            <label class="active" for="signup-birthday">Birthday</label>
                        </div>
                        <div class="col l6 ">
                            <p>
                                <label>
                                    <input class="with-gap sex" name="sex" value="male" type="radio" checked />
                                    <span>male</span>
                                </label>
                            </p>
                            <label>
                                <input class="with-gap sex" name="sex" value="female" type="radio" />
                                <span>female</span>
                            </label>
                            </p>
                            <label>
                                <input class="with-gap sex" name="sex" value="other" type="radio" />
                                <span>other</span>
                            </label>
                            </p>
                        </div>
                    </div>
            </div>

            </form>
        </div>
    </div>
    
  
        <div class="row">
            <div class="col l12 center-align">

                <button id="signup-submit" class="waves-effect waves-light btn ">
                    <i class="material-icons right">replay</i>
                    update
                </button>
            </div>
        
    </div>
</div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="libs/materialize/js/materialize.min.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>
</body>

</html>