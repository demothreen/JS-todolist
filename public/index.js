"use strict";

var id;
var todolist = {};

var b = JSON.parse(localStorage.getItem('todo'));

// console.log( Object.keys(b).length);

if (!b) {
    b = {};
} else {
    showSaveTodo(b);
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

        // console.log(todolist);

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

    for (var l in b) {
        // console.log(b[l]);
        var showTask = b[l].todo;

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
                b[x].check = true;
                localStorage.setItem('todo', JSON.stringify(b));

                for (var t in b) {
                    if (b[t].check === true) {

                        console.log(t);
                        delete localStorage['t'];
                    }

                    //console.log(t);
                }

                if (b[x].check === true) {

                    //delete localStorage['todo'];
                }
            }
        }
    });
}

checkMouseClick();

// удалить выполненные тудушки

function removeDone() {

    //console.log(b);

    // for (var t in b) {
    //     if (b[t].check == true) {
    //         console.log(localStorage);
    //         // localStorage.removeItem('todo').t;
    //     }
    // }
}

function removeAll() {

    delete localStorage['todo'];

}
