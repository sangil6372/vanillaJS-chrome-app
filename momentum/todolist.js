const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const  TODOS_KEY = "todos";
let toDos = []; // 안에 내용이 가변성

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;  // 지우기 전에 값 가져오기
    toDoInput.value = ""; // 텍스트 상자 비우기 
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),       
    }

    paintToDo(newTodoObj);

    toDos.push(newTodoObj); // toDos 에 obj 저장
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    button.innerText = '❌';
    button.addEventListener("click", deleteToDo);
    todoList.appendChild(li);

    
}

function deleteToDo(event){
    event.preventDefault();
    const li = event.target.parentNode;
    toDos = toDos.filter((Element) => Element.id!==parseInt(li.id));
    saveToDos();
    li.remove();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos!=null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
