const input = document.querySelector('.todo');
const ol = document.querySelector('ol');
let todo = [];
function addTodo(e) {
    e.preventDefault();
    ol.innerHTML = ''
    switch (input.value) {
        case '':
            alert('Enter task')
            break;

        default:
            // console.log(input.value);
            todo.push(input.value);
            // console.log(todo);
            for (let i = 0; i < todo.length; i++) {
                //    console.log(todo[i]);
                ol.innerHTML += ` <li>${todo[i]}</li>
           <button onclick='deleteTodo(${i})'>Delete Task</button>
           <button onclick='editTodo(${i})'>Edit Task</button> `
            }
    }

    input.value = ''


}

function deleteTodo(index) {
    ol.innerHTML = ''
    todo.splice(index, 1)
    for (let i = 0; i < todo.length; i++) {
        //    console.log(todo[i]);
        ol.innerHTML += ` <li>${todo[i]}</li>
    <button onclick='deleteTodo(${i})'>Delete Task</button>
    <button onclick='editTodo(${i})'>Edit Task</button> `
    }

}

function editTodo(index) {
    ol.innerHTML = ''
    let userValue = prompt('Enter edited value')
    todo.splice(index, 1, userValue)
    for (let i = 0; i < todo.length; i++) {
        //    console.log(todo[i]);
        ol.innerHTML += ` <li>${todo[i]}</li>
    <button onclick='deleteTodo(${i})'>Delete Task</button>
    <button onclick='editTodo(${i})'>Edit Task</button> `
    }
    // console.log(todo);

}