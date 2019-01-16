// XMLHttpRequest
function ajax(url, method, functionName, dataArray) {
    let xhttp = new XMLHttpRequest(); // вводим переменную и присваиваем ей значение нового объекта XMLHttpRequest()
    xhttp.open(method, url, true); // метод,открывающий соединение ( параметры: тип метода, адрес оправки, асинхронность)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // "отправляем заголовки" для конфигурации посылаемых на сервер данных
    xhttp.send(requestData(dataArray)); // метод, посылающий данные на сервер

    xhttp.onreadystatechange = function () { // событие, говорящее о том, что сервер что-то ответил
        //проверяем ответ сервера
        if (this.readyState == 4 && this.status == 200) {
            functionName(this.response); // функция, выполняющаяся по результату ответа от сервера
        }
    }
}
// создаем функцию, преобразующую массив данных в строку (let out) для того чтобы передать ее на сервер через метод  xhttp.send
function requestData(dataArr) {
    let out = '';
    for (let key in dataArr) {
        out += `${key}=${dataArr[key]}&`;
    }
    console.log(out);
    return out;
}

