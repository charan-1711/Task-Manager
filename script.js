const taskInput = document.getElementById("taskInput");
const listItems = document.getElementById("listItems");

function addTask(){
    if(taskInput.value === ''){
        alert("You must enter something");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = taskInput.value;
        listItems.appendChild(li);
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        `<div>`
        let button = document.createElement("button");
        button.id ="editButton" ;
        button.innerHTML = "View";
        `</div>`;
        li.appendChild(button);
    }
    // document.getElementById("editButton").onclick = function() {
    //     window.location.href = "edit.html"; 
    //     }
    taskInput.value='';
    saveData();
};

// const toggleTaskComplete = (index)=>{
//     tasks[index].completed = !tasks[index].completed;
//     updateTaskList();
// };

listItems.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.editTask();
        saveData();
    }
}, false);

function editTask () {
    document.getElementById("editButton").onclick = function() {
        window.location.href = "edit.html"; 
    }
}

function saveData(){
    localStorage.setItem("data", listItems.innerHTML);
}
function showTask(){
    listItems.innerHTML = localStorage.getItem("data");
}
showTask();







// const updateTaskList = ()=> {
//     const listItems = document.getElementById("listItems");
//     listItems.innerHTML = '';
// };