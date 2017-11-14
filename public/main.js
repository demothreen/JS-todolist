"use strict";

var todolist = [];

if (localStorage !== undefined) {
    //если localStorage существует, то вывести все что в нем есть
    //пока в процессе
}

function addTask() {

    //получаем данные от пользователя
    var d = document.getElementById('myTask').value;

    //создаем новый объект с данными пользователя

    var task = {};
    task.todo = d;
    task.check = false;

    //добавляем объект в наш массив

    var i = todolist.length;
    todolist[i] = task;

    function createTodo() {

        //записываем объект в localStorage

        localStorage.setItem(i, d);

        //создаем тэг <li> и выводим туда данные от user

        var myTask = localStorage[i];
        var list = document.getElementById('myUl');
        var entry = document.createElement('li');
        var lists = document.querySelector('ul');

        //проверка на пустые символы и пробелы
        //если все ок, то добавляем в локал значение
        //при клике добавляем в тэг <li> класс "checked"

        if (!d.replace(/^\s+|\s+$/g, '')) {
            alert('Вы ничего не написали');
        } else {
            entry.appendChild(document.createTextNode(myTask));
            list.appendChild(entry);

            lists.addEventListener('click', function(check) {
                if (check.target.tagName === 'LI') {
                    check.target.classList.toggle('checked');
                }
            });
        }
    }
    createTodo()
}

