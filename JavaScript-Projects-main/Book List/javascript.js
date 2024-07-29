// const inputText = document.querySelector('#add-book input');
// const link = document.querySelector('.button');
// const ul = document.querySelector('ul');
// const deleteSpan = `<span class="delete">حذف</span>`;

// link.addEventListener("click", (e) => {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     span.className = "name";
//     span.textContent = inputText.value;

//     li.appendChild(span);
//     li.innerHTML += deleteSpan;

//     ul.appendChild(li);

//     saveToLocalStorage(inputText.value);

//     inputText.value = "";
//     e.preventDefault();
// });

// document.addEventListener("DOMContentLoaded", (e) => {
//     let tasks;

//     if (localStorage.getItem("tasks") === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     for (let item of tasks) {
//         const li = document.createElement("li");
//         const span = document.createElement("span");
//         span.className = "name";
//         span.textContent = item;

//         li.appendChild(span);
//         li.innerHTML += deleteSpan;

//         ul.appendChild(li);
//     }
// });

// function saveToLocalStorage(task) {
//     let tasks;

//     if (localStorage.getItem("tasks") === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem("tasks"));
//     }

//     tasks.push(task);

//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }







const inputText = document.querySelector('#add-book input');
const link = document.querySelector('.button');
const ul = document.querySelector('ul');
const deleteSpan = `<span class="delete">حذف</span>`;
const checkBox = document.querySelector("#hide input");
let searchInput = document.querySelector("#search-books input");

link.addEventListener("click", (e) => {
    const span = document.createElement("span");
    span.className = "name";
    span.textContent = inputText.value;

    const li = document.createElement("li");
    li.appendChild(span);
    li.innerHTML += deleteSpan;

    ul.appendChild(li);

    saveToLocalStorage(inputText.value)
    inputText.value = ""
    e.preventDefault();
})


document.addEventListener("DOMContentLoaded", () => {
    let tasks;

    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

    for (let item of tasks) {
        const span = document.createElement("span");
        span.className = "name";
        span.textContent = item;
        const li = document.createElement("li");

        li.appendChild(span);
        li.innerHTML += deleteSpan;

        ul.appendChild(li)
    }
})

function saveToLocalStorage(task) {
    let tasks;

    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }


    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


ul.addEventListener("click", (e) => {
    if(e.target.className === "delete") {
        e.target.parentElement.remove();
    }
    deleteElement(e.target.parentElement.children[0].textContent);
})

function deleteElement(taskContent) {
    let tasks;

    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i] === taskContent) {
            tasks.splice(i, 1);
        }
    }

    if(tasks.length === 0) {
        localStorage.clear();
    } else {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}


checkBox.addEventListener("click", () => {
    if(checkBox.checked === true) {
        ul.style.display = "none"
    } else {
        ul.style.display = "initial";
    }
})


searchInput.addEventListener("keyup", () => {
    for (let book of ul.children) {
        if(book.firstElementChild.textContent.indexOf(searchInput.value) !== -1) {
            book.style.display = "block"
        } else {
            book.style.display = "none"
        }
    }
})












// const inputText = document.querySelector('#add-book input');
// const link = document.querySelector('.button');
// const ul = document.querySelector('ul');
// const checkBox = document.querySelector('#hide input');
// const inputSearch = document.querySelector('#search-books input'); 

// const spanDelete = `<span class="delete">حذف</span>`;

// link.addEventListener('click', function(e){
//     const spanName = document.createElement('span');
//     spanName.className = 'name';
//     spanName.textContent = inputText.value;

//     const li = document.createElement('li');

//     li.appendChild(spanName);
//     li.innerHTML += spanDelete;

//     ul.appendChild(li);
    
//     storeToLocalStorage(inputText.value);

//     inputText.value = '';
//     e.preventDefault();
// })



// ul.addEventListener('click', function(e){
//     if(e.target.className === 'delete'){
//         e.target.parentElement.remove();
//         removeFromLocalStorage(e.target.parentElement.children[0].textContent);
//     }
// })


// checkBox.addEventListener('change', function(e){
//     if(checkBox.checked === true){
//         ul.style.display = 'none';
//     } else {
//         ul.style.display = 'block';
//     }
// })

// inputSearch.addEventListener('keyup', function(e){
//     for(let book of ul.children){
//         if(book.firstElementChild.textContent.indexOf(inputSearch.value) !==-1){
//             book.style.display = 'block';
//         } else {
//             book.style.display = 'none';
//         }
//     }
// })


// document.addEventListener('DOMContentLoaded', function(e){
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     } else {
//         tasks = localStorage.getItem('tasks').split(',');
//     }

//     for(let item of tasks){
//         const spanName = document.createElement('span');
//         spanName.className = 'name';
//         spanName.textContent = item;
    
//         const li = document.createElement('li');
    
//         li.appendChild(spanName);
//         li.innerHTML += spanDelete;
    
//         ul.appendChild(li);
//     }
// })

// function storeToLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     } else {
//         tasks = localStorage.getItem('tasks').split(',');
//     }

//     tasks.push(task);

//     localStorage.setItem('tasks', tasks);
// }


// function removeFromLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     } else {
//         tasks = localStorage.getItem('tasks').split(',');
//     }

//     for(let i=0; i<tasks.length; i++){
//         if(tasks[i] === task){
//             tasks.splice(i, 1);
//         }
//     }

//     if(tasks.length === 0){
//         localStorage.clear();
//     } else {
//         localStorage.setItem('tasks', tasks);
//     }
// }
