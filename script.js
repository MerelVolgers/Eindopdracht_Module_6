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
    checkBox.classList.add("checkBox");
    checkBox.checked = task.done; // wanneer taak gedaan is, blijft checkbox checked na reload

    const newTask = document.createElement("input");
    newTask.type="text";
    newTask.value = (`${task.description}`);
    newTask.setAttribute("id", task._id); 
    newTask.disabled = true;
    newTask.classList.add("task_input");

    if (checkBox.checked) {newTask.classList.add("striketrough")}; //checked>striketext

    const editButton = document.createElement("button");
    editButton.innerHTML = (`<i class="fas fa-edit"></i>`)
    editButton.classList.add("editButton");

    const removeButton = document.createElement("button");
    removeButton.innerHTML = (`<i class="far fa-trash-alt"></i>`)
    removeButton.classList.add("removeButton");

    // toDoList.prepend(taskBox);
    toDoList.append(taskBox);
    taskBox.append(checkBox, newTask, editButton, removeButton);

 // <-------------------- REMOVE BUTTON -------------------------->

    removeButton.addEventListener("click", (event) =>{
        taskBox.remove();
        deleteDataById(task._id);
    });
    
 // <-------------------CHECK TASKS------------------------------>

    checkBox.addEventListener("change",  (event) => {
    
        if (checkBox.checked) {
            newTask.classList.add("striketrough");
            let data = {description: `${task.description}`, done: checkBox.checked};
            putData(task._id, data);
        } else {
            newTask.classList.remove("striketrough");
            let data = {description:`${task.description}`, done: checkBox.checked};
            putData(task._id, data);
        }

    });

 // <----------------- EDIT TASKS ------------------------------>
    editButton.addEventListener("click", () => {
        newTask.disabled =! newTask.disabled;
        newTask.classList.add("edit_task");
        newTask.addEventListener("keyup", (event) =>{

            if (event.keyCode===13){
                let data = {description: event.target.value, done: checkBox.checked};
                putData(task._id, data); 
                newTask.disabled= true;
                newTask.classList.remove("edit_task");
            };
        })
    })

}

// <------------------ ADDS & POSTS A NEW TASK ------------------>

const addNewTask = async () =>  {

    let newTaskInput = {description: inputField.value, done:false}; // 1.wat je wilt toevoegen aan de DOM
    createNewTaskBox(newTaskInput); // 1.adds taskbox to the DOM
    inputField.value= " "; // 1.empties inputfield in the DOM
    const getIdOfTask = await postData (newTaskInput); //2. stuurt data naar API om id terug te krijgen    
    getTasks(getIdOfTask); //logt nieuwe data in de DOM op bij API incl nieuwste task
    toDoList.innerHTML = " "; // leegt oude data uit de DOM
}

inputField.addEventListener ("keyup", (event) => {
    if (inputField.value == " ") {
        alert ("Type a new task to add something!");
    } else if (event.keyCode === 13) {
            addNewTask();
    }
});

addTaskButton.addEventListener("click", (event) => {
    if (inputField.value == " ") {
        alert ("Type a new task to add something!");
    } else {
        addNewTask();
    }
});