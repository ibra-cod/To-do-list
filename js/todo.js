
import { AddTodos, addFolders , categories} from "../js/main.js";


export const doTheFolderAlreadyExist = (categories, folder_name_value) => {
    console.log(folder_name_value);
    console.log(categories);
    const doFolderExist = categories.filter(category => category.folderName.toLowerCase() === folder_name_value)
    if (doFolderExist == false) {
        addFolders(categories,  folder_name_value)
    }
}






export const  showFolders  = (categories) => {
    const folderElemetns = document.getElementById('folderElements')
    folderElemetns.innerHTML = ''
    // const setUniqueTodos = [...new Set(todos)]
    // console.log(setUniqueTodos);
    for (const key in categories) {
        folderElemetns.innerHTML += 
        `<div class="folder-style">
            <p class="categories">${categories[key].folderName}</p>
        </div>`;
    }

    const  categoriesP = document.querySelectorAll('.categories')

    categoriesP.forEach(x => {
        x.addEventListener('click', function () {
            console.log(x);
        })
    });
}




