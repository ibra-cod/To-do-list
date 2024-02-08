import { showFolders, doTheFolderAlreadyExist } from "../js/todo.js";
// constant declaration
const  pMessage = document.getElementById('p-message') 
const plusSpan = document.getElementById('plusSpan')
const popUp = document.querySelector('.popUp')
const btnPopUp = document.getElementById(('btn-popUp'))
const folderName = document.getElementById('projectName')






// get all the todos in the localstorage
const getLocalStorageInfo = function (key) {
    const  data = JSON.parse(localStorage.getItem(key)) ?? [];
    if(localStorage) {
      return data;
    };
 };


const todos = getLocalStorageInfo('todos');
export const categories = getLocalStorageInfo('categories');
console.log(categories);


// delete all the todo in the localstorage
// const clearAllTodo = function () {
//     todos.splice(0, todos.length);
//     localStorage.removeItem('todos');
//     window.location.reload();
// }


// save to todo takes 2 parameters and set all the todo in the local storage
const saveTodos = function (key,value) {
    localStorage.setItem(key,value);
    getLocalStorageInfo(key);
}

// show todos display all the todos of the user
// that are in the todos []
const showTodos = () => {
    const elements = document.getElementById('elements');
    elements.innerHTML = '';
    if (todos.length > 0) {
       
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
        pMessage.innerHTML = "Thinks to do ? write it down !";
    }
};



export const addFolders =  (categories, folder_name_value) => {
     categories.push({folderName: `${folder_name_value}`})
    saveTodos('categories', JSON.stringify(categories));
}




// the AddTodo function add and the input value
// in the constant todos[]



export const AddTodos = (categories) => {
    const nameInput = document.getElementById('name');
    const description = document.getElementById('textareaId');
    const  input_name_value = nameInput.value.trim();
    const  folder_name_value = folderName.value.trim();
    const description_value = description.value.trim();
    const todoStatus = 'in progress';
    
   
       
    if ( input_name_value.length > 0) {
        if (folder_name_value.length > 0) {
            if (description_value.length > 0) {
                todos.unshift({name : `${input_name_value}`, folderName: `${folder_name_value}`,description : `${ description_value}`, todoStatus : `${todoStatus}` });
                saveTodos('todos', JSON.stringify(todos));

                // categories.push({folderName: `${folder_name_value}`})
                // saveTodos('category', JSON.stringify(categories));
                doTheFolderAlreadyExist(categories, folder_name_value.toLowerCase())
                window.location.reload()
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
    popUp.classList.toggle('btn-popUp');
   
})

btnPopUp.addEventListener('click', function () {
    AddTodos(categories);
})


if (todos.length > 0) {
    (showTodos());
} 

    showFolders(categories);



