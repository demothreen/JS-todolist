"use strict";

var todolist = [];

if (localStorage.getItem('todo') !== undefined) {
    todolist = JSON.parse(localStorage.getItem('todo'));
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

    //записываем объект в localStorage

    localStorage.setItem('todo', JSON.stringify(todolist));

    createTodo();

    function createTodo() {

        //создаем тэг <li> и выводим туда данные от user

        var myTask = todolist[i].todo;
        var list = document.getElementById('myUl');
        var entry = document.createElement('li');
        var lists = document.querySelector('ul');

        //проверка на пустые символы и пробелы
        //если все ок, то добавляем в локал значение

        lists.addEventListener('click', function(check) {
            if (check.target.tagName === 'LI') {
                check.target.classList.toggle('checked');
            }
        });

        //при клике добавляем в тэг <li> класс "checked"

        if (!d.replace(/^\s+|\s+$/g, '')) {
            alert('Вы ничего не написали');
        } else {
            entry.appendChild(document.createTextNode(myTask));
            list.appendChild(entry);


        }
    }

}

