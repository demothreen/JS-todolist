"use strict";

var todolist = [];
var i;

var b = JSON.parse(localStorage.getItem('todo'));
if (b.length > 0) {
    for (var j = 0; j < b.length; j++) {
        var g = b[j].todo;
        showSaveTodo(g);
    }
}

/*
Получаем данные от пользователя, добавляем в массив
 */

function userTodo() {

    //получаем данные от пользователя

    var userTask = document.getElementById('userTask').value;

    // проверяем на пустую строку и если все ок
    // создаем новый объект с данными от пользователя

    if (!userTask.replace(/^\s+|\s+$/g, '')) {
        alert('Вы ничего не написали');
    } else {
        var task = {};
        task.todo = userTask;
        task.check = false;

        //добавляем объект в наш массив

        i = todolist.length;
        todolist[i] = task;

        showTodo();
    }
}

/*
Если данные уже существуют то выводим что есть в локале
 */

function showSaveTodo(tasks) {

    var list = document.getElementById('myUl');
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(tasks));
    list.appendChild(entry);

}

/*
Функция выводит тудушку
 */

function showTodo() {

    //получаем значение тудушки

    var myTask = todolist[i].todo;

    //выводим как новый тэг <li> с текстом тудушки

    var list = document.getElementById('myUl');
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(myTask));
    list.appendChild(entry);

    //записываем объект в localStorage

    localStorage.setItem('todo', JSON.stringify(todolist));

}

/*
Проверяем клик мыши на тудушку
 */

function checkMouseClick() {

    var lists = document.querySelector('ul');

    //при клике добавляем в тэг <li> класс "checked"

    lists.addEventListener('click', function (check) {
        if (check.target.tagName === 'LI') {
            check.target.classList.toggle('checked');
        }
    });
}

checkMouseClick();