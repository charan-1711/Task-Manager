const tasks = [];

const addTask = ()=> {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim()

    if (text) {
        tasks.push({ text: text, completed: false});

        updateTaskList();
    }
};

const toggleTaskComplete = (index)=>{
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTaskList();
}

const editTask = (index) => {
    const taskInput = document.getElementById("taskInput");
    taskInput.value = tasks[index].text;

    tasks.splice(index, 1);
    updateTaskList();
}

const updateTaskList = ()=> {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';

    tasks.forEach((task,index) => {
        const listItem =document.createElement('li');

        listItem.innerHTML = `
       <div class="listItem">
    <div class="task ${task.completed ? "completed":""}">
        <input type="checkbox" class="checkbox" ${
            task.completed? "checked" : ""
        }/>
        <p>${task.text}</p>
    </div>
    <div class="icons">
        <img src="" alt="edit" onclick="editTask(${index})" />
        <img src="" alt="delete" onclick="deleteTask(${index})"/>
    </div>
</div>
`;
listItem.addEventListener('change', ()=> toggleTaskComplete(index));
taskList.append(listItem);
});
};

document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault();
    addTask();
});