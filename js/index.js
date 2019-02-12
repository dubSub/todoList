const add = document.getElementsByClassName('add')[0];
const textTodo = document.getElementsByClassName('textTodo')[0];
const todoList = document.getElementsByClassName('todoList')[0];
const todo = document.getElementsByClassName('todo')[0];
let todoElement = '';
let arry = [];



add.addEventListener('click', () => {
    todoElement = `<div class ='todoElement bg-dark text-white'>${textTodo.value}<form style='display:none' class='form'><button contenteditable ='false' class ='edit btn btn-success'>Edit</button><button contenteditable ='false' class ='but btn btn-danger'>Delete</button></form><button class="rounded-circle border btn btn-xm btn-secondary glyphicon glyphicon-th-list"></button></div>`;
    arry.push(todoElement)
    todoList.innerHTML += todoElement;
})

todo.addEventListener('click', (e) => {
    if(e.target.className === 'rounded-circle border btn btn-xm btn-secondary glyphicon glyphicon-th-list') {
       $(e.target.parentNode.children).show(300) 
       
    }
        if(e.target.className === 'but btn btn-danger') {
            e.preventDefault();
          $(e.target.parentNode.parentNode).hide(300)
        }
            if(e.target.className === 'edit btn btn-success') {
                e.preventDefault();
              e.target.parentNode.parentNode.setAttribute('class', 'todoElement bg-secondary text-white');
              e.target.parentNode.parentNode.setAttribute('contenteditable', true);
            } 
                if (e.target.className === 'todo container col-7 row-10 bg-color') {
                    for(let i = 0; i < arry.length; i++) {
                        todoList.children[i].setAttribute('contenteditable', false);
                        todoList.children[i].setAttribute('class', 'todoElement bg-dark text-white');
                    }
                }
})


