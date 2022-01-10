let toDo = document.getElementById('todo')
let add = document.getElementById('add');
let todoList = document.getElementById('todoList')



addBtn.addEventListener('click', function listaTarefa(){

    if (toDo.value =="") {
        alert("Digite uma tarefa");
    } else {
        
        let chk = document.createElement('INPUT');
        let list = document.createElement('LI');
        let span = document.createElement('span')
        var listItem = document.createTextNode(toDo.value);
    

        chk.setAttribute("type", "checkbox");

        list.appendChild(chk);
        list.appendChild(span);

        span.appendChild(listItem)

        todoList.appendChild(list);
        toDo.value = ""
    }

})

clearBtn.addEventListener('click', function limpaTarefas(){
   var ul = document.getElementById("todoList");
   while (ul.firstChild) ul.removeChild(ul.firstChild);
})



