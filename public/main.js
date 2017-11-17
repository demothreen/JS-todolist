"use strict";

var todolist = {};

function syncData() {
    //записываем объект в localStorage
    localStorage.setItem('todo', JSON.stringify(todolist));

}

function generateId() {
    var id = '_' + Math.floor(Math.random() * 10000);
    alert(id);
}

function userTodo() {

    //получаем данные от пользователя

    var userTask = document.getElementById('userTask').value;

    // проверяем на пустую строку и если все ок
    // создаем новый объект с данными от пользователя

    if (!userTask.trim()) {
        alert('Вы ничего не написали');
    } else {
        var task = {};
        task.todo = userTask;
        task.check = false;
    }
}

function generateTodoElement(id, todo, done) {
    var newElement = TODO_ELEMENT;


}

// function removeFromList(event) {
//     var div = event.target.closest('div');
//     div.remove();
//     delete listData[div.id];
//     syncData();
// }

// function toggleDone(event) {
//     var todoElement = event.target.parentElement;
//     todoElement.classList.toggle('done');
//     saveTodoElement(todoElement.id, {done: todoElement.classList.contains('done')});
// }