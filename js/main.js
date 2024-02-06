// constant declaration
const button = document.getElementById('addTodoBtn');
const ul  = document.querySelector('.ul');

const  pMessage = document.getElementById('p-message') 
const btnbtn = document.querySelectorAll('.btn');
const clearTodo = document.getElementById('clearTodo');
const divelements = document.getElementById('div-elements');
const plusSpan = document.getElementById('plusSpan')
const popUp = document.querySelector('.popUp')
const btnPopUp = document.getElementById(('btn-popUp'))
const inputElements = document.querySelectorAll('inputElements')






// get all the todos in the localstorage
const getTodos = function () {
    let data = JSON.parse(localStorage.getItem('todos')) ?? [] ;
    if(localStorage) {
      return data
    };
 };


const todos = getTodos()

console.log(todos);

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
    const elements = document.getElementById('elements');
    elements.innerHTML = '';
    if (todos.length !== 0) {
        for (const key of todos) {
            elements.innerHTML += `
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



if (todos.length > 0) {
    (showTodos());
} else {

}

// the AddTodo function add and the input value
// in the constant todos[]



const AddTodo = (inputElements) => {
    const nameInput = document.getElementById('name')
    const folderName = document.getElementById('name')
    const description = document.getElementById('textareaId')

       const  input_name_value = nameInput.value.trim()
       const  folder_name_value = nameInput.value.trim()
        const description_value = nameInput.value.trim()
        const todoStatus = 'in progress';
       
        if ( input_name_value.length > 1) {
            if (input_name_value.length > 1) {
                if (description_value.length > 1) {
                    todos.unshift({name : `${input_name_value}`, folderName: `${folder_name_value}` ,description : `${ description_value}`, todoStatus : `${todoStatus}` });
                    saveTodos('todos', JSON.stringify(todos));
                   window.location.reload();
                }
            }

            
        } 
    //else {
    //         messageEroor.innerHTML = "Cannot enter an empty todo";
    //         setTimeout(() => {
    //         messageEroor.classList.add('displayMessage');
    //         }, 4000);
    //         inputN = '';
}

// call the addTodos each time the user key is up

// clearTodo.addEventListener('click' , clearAllTodo)


plusSpan.addEventListener('click', function () {
    popUp.classList.toggle('btn-popUp')
    console.log('s');
})

btnPopUp.addEventListener('click', function () {
    AddTodo(inputElements)
    
})



