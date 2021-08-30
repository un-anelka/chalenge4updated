// Selectors

const class3=document.querySelector('.class3');
const class2=document.querySelector('.class2');
const daynight=document.querySelector('.class1 img');
const pendingList=document.querySelector(".pending");
const filterOption=document.querySelector(".controls-list")
const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");
const clearAll=document.querySelector("#clear-completed")


// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteCheck);
daynight.addEventListener('click', toogleclasses);
// filterOption.addEventListener('click', filterTodos);
clearAll.addEventListener("click", clearAllTodo)
//Functions
function toogleclasses(){
    const sunmoon= daynight.parentElement;
    // daynight.classList.toggle("classes")
    sunmoon.classList.toggle("classes");
    console.log("Hello World");
    class2.classList.toggle("classes2");
    class3.classList.toggle("classes3");

    todoInput.classList.toggle("classinput");
    todoButton.classList.toggle("classinput");
    // todoInput.classList.toggle("");

    // sunmoon.replaceChild(newImage, oldImage)

        if (daynight.src.match("/images/icon-sun.svg")){
            console.log(daynight.src);
            daynight.src = "/images/icon-moon.svg";
        }
        else
        {console.log(daynight.src);
            daynight.src = "/images/icon-sun.svg";
        }
    
}


let  listArr=[];
pendingList.textContent=listArr.length;
function addTodo(event){
    //prevent form from submittng
    if (todoInput.value !=""){
    event.preventDefault();
    console.log("Hello world");
    // Todo Div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add('todo');

    //create li
    const newTodo=document.createElement("li");
    
    newTodo.innerHTML=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    


    // CHECK MARK BUTTON
    const completedButton=document.createElement("button");
    // completedButton.innerHTML='<i class="fas fa-check"></li> Completed';
    completedButton.innerHTML='<img src="/images/icon-check.svg" class="checkbox">';
    // completedButton.innerHTML='<input type="checkbox">';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // CHECK TRASH BUTTON
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></li><span class="trash">X</span>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST

    todoList.appendChild(todoDiv)

    //Clear Todo INPUT VALUE
    todoInput.value="";
    todoInput.focus()
    //counting  todo items
    listArr.push(todoInput.value);
    console.log(listArr)
}
// pendingList.textContent=listArr.length;
    pendingList.textContent=listArr.length;
}
function deleteCheck(event){
    console.log(event.target)

    const item=event.target;
    //DELETE TODO
    if(item.classList[0]==="trash-btn"|| item.classList[0]==="fas fa-trash"){
        console.log("UN Hello")
        const todo=item.parentElement;

        //ANIMATION and Todo.remove
        todo.classList.add("fall")
        todo.addEventListener("transitionend", function(){
            console.log("Hi mister")
            todo.remove(); 
        })
        listArr.length--;
        console.log(listArr.length)
        // todo.remove()
    }
    //CHECK MARK
    

    
    if (item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        
        // console.log(item.nextElementSibling)
    //     const todoItems=document.querySelector('.todo-item')
        
    //    todoItems.classList.toggle("completed")
        
        todo.classList.toggle("completed");
    }
    pendingList.textContent=listArr.length;
 }

 // filter function

 function myFunctionon(event) {
    var x = event.target;
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
    // console.log(x.value)
    switch(x.value){
        case "null":
            console.log(x.value+" 1");
            console.log(todos)
        
            break;
        case "completed":
            console.log("UN");
            console.log(todos[1]);
            // modal.style.display="none";
            // console.log()
            break;
        case "active":
            console.log("active state");
            break;
        case "all":
            console.log("all has been selected");
            todos.style.display="none";
            break;

    }
})
}


// Clear all function




function clearAllTodo(e) {
    // if (e.target.id == "clear-completed") {
    //  let item= e.target.parentElement;
    //  console.log(item.children)
    //  const items=Array.from(item.children)
    //  console.log(Array.from(item.children))
    //  console.log(items[4])
     
    listArr=[];
    // todoList.style.display="none";
    pendingList.textContent=listArr.length;
    todoList.remove()
    // todoInput
 
  }


