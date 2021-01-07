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
// <------------edit werkt nog niet met PUT, wel in DOM ------->
    editButton.addEventListener("click", () => {
        newTask.disabled =! newTask.disabled;
        newTask.addEventListener("keyup", (event) =>{
            if (event.keyCode===13){
                const newTaskText = event.target.value;
                let editedTask = {description: newTaskText, done:false};
                putNewData(editedTask); //<------iets werkt niet
                newTask.disabled= true;
            };
        })
    })
// <--------------------checkbox werkt  --------------->

    checkBox.addEventListener("change", (event) => {
        if (checkBox.checked == true){
            newTask.classList.add("striketrough");
        } else {
            checkBox.uncheck;
            newTask.classList.remove("striketrough");
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
    }
})

inputField.addEventListener ("keyup", (event) => {
    newTaskInput = event.target.value;
    if (event.keyCode === 13) {
        event.preventDefault();
        let task = {description: newTaskInput, done:false};
        createNewTaskBox(task);
        postData(task);
    } else if (inputField.value == " ") {
        alert ("Type a new task to add something!")
    }
});




