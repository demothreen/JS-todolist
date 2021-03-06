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

    for (let l in todolist) {
        let showTask = todolist[l].todo;

       // var showTask = b[id].todo;

        let list = document.getElementById('myUl');
        let entry = document.createElement('li');

        entry.appendChild(document.createTextNode(showTask));
        entry.id = l;
        list.appendChild(entry);

        if (todolist[l].check === true){
            entry.classList.add('checked');
        }
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

    let lists = document.querySelector('ul');

    //при клике добавляем в тэг <li> класс "checked"

    lists.addEventListener('click', function (check) {
        if (check.target.tagName === 'LI') {
            check.target.classList.toggle('checked');

            let x = check.target.id;

            console.log(todolist[x]);

            todolist[x].check = !todolist[x].check;
            syncData();
        }
    });
}

checkMouseClick();

// удалить выполненные тудушки

function removeDone() {

    let todos = document.getElementById('myUl').children;

    for (let i in todos) {

        if (i.startsWith('_') && todos[i].classList.contains('checked')) {

            todos[i].remove();
        }
    }

    for (let t in todolist) {
        if (todolist[t].check === true) {
            delete todolist[t];
        }
    }
    syncData();
}

//удалить всё

function removeAll() {

    let todos = document.getElementById('myUl').children;

    for (let i in todos) {
        if (i.startsWith('_')) {
            todos[i].remove();

        }
    }

    for (let t in todolist) {
        delete todolist[t];
    }

    delete localStorage['todo'];

}
