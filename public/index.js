"use strict";

var id;

var todolist = JSON.parse(localStorage.getItem('todo'));

// console.log(Object.keys(todolist).length);

if (!todolist) {
    todolist = {};
} else {
    showSaveTodo(todolist);
}

function generateId() {
    var id = '_' + Math.floor(Math.random() * 10000);
    return id;
}

/*
Получаем данные от пользователя, добавляем в массив
 */

function userTodo() {

    var userTask = document.getElementById('userTask').value;

    if (!userTask.trim()) {
        alert('Вы ничего не написали');
    } else {
        var task = {};
        task.todo = userTask;
        task.check = false;

        var id = generateId();
        todolist[id] = task;

        var myTask = todolist[id].todo;

        //выводим как новый тэг <li> с текстом тудушки

        var list = document.getElementById('myUl');
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(myTask));
        for (var key in todolist) {
            entry.id = key;
        }

        list.appendChild(entry);

        syncData()

    }
}

/*
Если данные уже существуют то выводим что есть в локале
 */

function showSaveTodo() {

    for (var l in todolist) {
        var showTask = todolist[l].todo;

        // var showTask = b[id].todo;

        var list = document.getElementById('myUl');
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(showTask));
        entry.id = l;
        list.appendChild(entry);
    }

}

//записываем объект в localStorage

function syncData() {
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

            var x = check.target.id;
            if (x) {
                todolist[x].check = true;
                syncData();
            }
        }
    });
}

checkMouseClick();

// удалить выполненные тудушки

function removeDone() {
    for (var t in todolist) {
        if (todolist[t].check === true) {
            delete todolist[t];
            syncData();
        }
    }
}

function removeAll() {

    delete localStorage['todo'];
}
