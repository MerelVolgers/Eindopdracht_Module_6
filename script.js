const addTaskButton = document.getElementById("addTaskButton");
const toDoList = document.getElementById("toDoList");
const inputField = document.getElementById("input");

// <-------------- LOADS SAVED TASKS ----------------------->

const getTasks = async () => {
    const data = await getData();
    const getTask = data.map(task =>{
        createNewTaskBox(task);
    });
}
getTasks();

// <--------------- CREATES A NEW TASK ------------------------->
const createNewTaskBox = (task) => {
    const taskBox = document.createElement("div");
    taskBox.classList.add("taskBox");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = false;
    checkBox.classList.add("checkBox");

    const newTask = document.createElement("input");
    newTask.type="text";
    newTask.value = (`${task.description}`);
    newTask.setAttribute("id", task._id);
    newTask.disabled = true;
    newTask.classList.add("task_input");

    const editButton = document.createElement("button");
    editButton.innerHTML = (`<i class="fas fa-edit"></i>`)
    editButton.classList.add("editButton");

    const removeButton = document.createElement("button");
    removeButton.innerHTML = (`<i class="far fa-trash-alt"></i>`)
    removeButton.classList.add("removeButton");

    toDoList.appendChild(taskBox);
    taskBox.append(checkBox, newTask, editButton, removeButton);

    removeButton.addEventListener("click", (event) =>{
        taskBox.remove();
        deleteDataById(task._id);
    });
// <----------------- EDIT TASKS ------------------------------>
    editButton.addEventListener("click", () => {
        newTask.disabled =! newTask.disabled;
        newTask.addEventListener("keyup", (event) =>{
            if (event.keyCode===13){
                const newTaskText = event.target.value;
                let editedTask = {description: newTaskText, done:false};
                putNewText(task._id, editedTask); 
                newTask.disabled= true;
            };
        })
    })
// <-------------------CHECK TASKS------------------------------>
    checkBox.addEventListener("change", (event) => {
        if (checkBox.checked == true){
            newTask.classList.add("striketrough");
            newTaskInput = event.target.value
            let taskDone = {description: newTaskInput, done:true};
            putDone(task._id, taskDone); 
        } else {
            checkBox.uncheck;
            newTask.classList.remove("striketrough");
            newTaskInput = event.target.value;
            let taskDone = {description: newTaskInput, done:false};
            putDone(task._id, taskDone);
        }
        
    });

};

// <------------------ ADDS & POSTS A NEW TASK ------------------>
//<---------------kunnen deze in 1 functie ???? ----------------->

addTaskButton.addEventListener("click", (event) => {
    if (inputField.value == " ") {
        alert ("Type a new task to add something!");
    } else {
        let task = {description: newTaskInput, done:false};
        createNewTaskBox(task);
        postData(task); 
        inputField.value = " ";
    }
})

inputField.addEventListener ("keyup", (event) => {
    newTaskInput = event.target.value;
    if (event.keyCode === 13) {
        // event.preventDefault();
        let task = {description: newTaskInput, done:false};
        createNewTaskBox(task);
        postData(task);
        inputField.value = " ";
    } else if (inputField.value == " ") {
        alert ("Type a new task to add something!")
    }
});




