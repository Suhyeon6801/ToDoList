const toDoForm=document.querySelector('.todoForm'),
    toDoInput=toDoForm.querySelector('input'),
    toDoList=document.querySelector('.todoList');


const TODOS_LS='toDos'

let toDos=[];

function paintToDo(text){
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const newId=toDos.length+1;
    
    delBtn.innerHTML="지우기";
    delBtn.addEventListener("click",deleteToDo);
    const span=document.createElement("span");
    span.innerText=text;
    
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id=newId;
    toDoList.appendChild(li);

    const toDoObj={
        text:text,
        id:newId,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event){
    const btn=event.target;
    const li=btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos=toDos.filter(function filterFn(toDo){
        console.log(toDo.id,li.id);
        return toDo.id!== parseInt(li.id)
    });

    toDos=cleanToDos;
    saveToDos();
}

function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);

    if(loadedToDos!==null){
        console.log(loadedToDos);
        const parsedToDos=JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.foreach(function (toDo){
            paintToDo(toDo.text);
        });
    }
}



function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}



function init(){
    loadToDos();
    toDoForm.addEventListener('submit',handleSubmit);
}

init();