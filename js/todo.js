// constant declaration
const button = document.getElementById('addTodoBtn');
const ul  = document.querySelector('.ul');
const containerDivTodoAdded = document.getElementById('container-todo-added');
const  pMessage = document.getElementById('p-message') 
const btnbtn = document.querySelectorAll('.btn');
const clearTodo = document.getElementById('clearTodo');
const divelements = document.getElementById('div-elements');

// get all the todos in the localstorage
const getTodos = function () {
    let data = JSON.parse(localStorage.getItem('todos')) ?? [] ;
    if(localStorage) {
      return data
    };
 };


const todos = getTodos()

// delete all the todo in the localstorage
const clearAllTodo = function () {
    todos.splice(0, todos.length);
    localStorage.removeItem('todos')
    window.location.reload();
}

// delete all the todo in the localstorage
const localStorageUpdate = function () {
    localStorage.setItem('todos', JSON.stringify(todos));
}


// save to todo takes 2 parameters and set all the todo in the local storage
const saveTodos = function (key,value) {
    localStorage.setItem(key,value);
    getTodos(key);
}

saveTodos();

// show todos display all the todos of the user
// that are in the todos []
const showTodos = () => {
    containerDivTodoAdded.innerHTML = '';
    if (todos.length !== 0) {
        for (const key of todos) {
            containerDivTodoAdded.innerHTML += `
                <div class="div-todo-added">    
                    <ul class="ul">
                        <li id="li-todo"> ${key.description} 
                        </li>
                    </ul>
                </div>
                  `;
        } ;
    } else {
        pMessage.innerHTML = "Thinks to do ? write it down !"
    }
};


// the AddTodo function add and the input value
// in the constant todos[]

const AddTodo = () => {
    let input = document.getElementById('input').value.trim();
    let messageEroor = document.getElementById('message-error');

    if (input !== '') {
            todos.push({description : `${input}`});
            saveTodos('todos', JSON.stringify(todos));
            showTodos();
    } else {
            messageEroor.innerHTML = "Cannot enter an empty todo";
            setTimeout(() => {
            messageEroor.classList.add('displayMessage');
            }, 4000);
            input = '';
    }
    input = '';

}

// call the addTodos each time the user key is up
input.addEventListener('keyup', function (action) {
    if (action.key === "Enter") {
        AddTodo();
    }
}
);

(showTodos())

clearTodo.addEventListener('click' , clearAllTodo)
