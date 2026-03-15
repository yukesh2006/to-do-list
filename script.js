function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    if(task === ""){
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.textContent = task;
    li.onclick = function(){
        li.style.textDecoration = "line-through";
    }
 function searchTask(){
    let input=document.getElementById("searchInput").value.toLowerCase();
    let tasks=document.querySelectorAll("li");
    tasks.forEach(task=>{
        task.style.display=task.textContent.toLowerCase().includes(input)
        ?"block":"none";
    });
}
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.onclick = function(){
li.remove();
}
li.appendChild(deleteBtn);
document.getElementById("taskList").appendChild(li);
input.value = "";
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks(){
	localStorage.setItem("tasks", JSON.stringify(tasks));
}
let checkBox=document.createElement("input");
checkBox.type="checkbox";
checkBox.onclick=function(){
    li.classList.toggle("completed");
    saveTasks();
}
li.appendChild(checkBox);
function updateCounter(){
    document.getElementById("counter").textContent=
    document.querySelectorAll("li").length+"tasks";
}
let dueDate=document.getElementById("dueDate").value;
function toggleDark(){
    document.body.classList.toggle("dark");
}
}
