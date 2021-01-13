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
    // checkBox.checked = false;
    checkBox.classList.add("checkBox");

    const newTask = document.createElement("input");
    newTask.type="text";
    newTask.value = (`${task.description}`);
    // newTask.value = inputField.value; // <---- is dit nodig of al aagenmaakt
    newTask.setAttribute("id", task._id); 
    newTask.disabled = true;
    newTask.classList.add("task_input");
    
    if (task.done == true) {
        newTask.classList.add("strikethrough")
    };

    const editButton = document.createElement("button");
    editButton.innerHTML = (`<i class="fas fa-edit"></i>`)
    editButton.classList.add("editButton");

    const removeButton = document.createElement("button");
    removeButton.innerHTML = (`<i class="far fa-trash-alt"></i>`)
    removeButton.classList.add("removeButton");

    toDoList.appendChild(taskBox);
    taskBox.append(checkBox, newTask, editButton, removeButton);

// <-------------------- REMOVE BUTTON -------------------------->

    removeButton.addEventListener("click", (event) =>{
        taskBox.remove();
        deleteDataById(task._id);
    });
    
    
// <----------------- EDIT TASKS ------------------------------>
    editButton.addEventListener("click", () => {
        newTask.disabled =! newTask.disabled;
        newTask.classList.add("edit_task");
        newTask.addEventListener("keyup", (event) =>{
            if (event.keyCode===13){
                const newTaskText = event.target.value;
                let editedTask = {description: newTaskText, done:false};
                putData(task._id, editedTask); 
                newTask.disabled= true;
                newTask.classList.remove("edit_task");
            };
        })
    })

// <-------------------CHECK TASKS------------------------------>
    checkBox.addEventListener("change", (event) => {
        if (checkBox.checked == true){
            newTask.classList.add("striketrough");
            let taskDone = {description: `${task.description}`, done:true};
            putData(task._id, taskDone); 
        } else if (checkBox.checked == false) {
            newTask.classList.remove("striketrough");
            let taskDone = {description: `${task.description}`, done:false};
            putData(task._id, taskDone);
        }
    });
}


// <------------------ ADDS & POSTS A NEW TASK ------------------>


//Dus voeg je een nieuw item toe aan je TODO:
// 1. voeg dit toe in je DOM
// 2. stuur een bericht naar de API
// 3. haal de nieuwe data op bij de API
// 4. ververs dan de DOM nogmaals


const addNewTask = async () =>  {

    let newTaskInput = {description: inputField.value, done:false}; // 1.wat je wilt toevoegen aan de DOM
    createNewTaskBox(newTaskInput); // 1.adds taskbox to the DOM
    inputField.value= " "; // 1.empties inputfield in the DOM
    
    const getIdOfTask = await postData (newTaskInput); //2. stuurt data naar API om id terug te krijgen
    // console.log(getIdOfTask); // logt de teruggegeven id van de nieuwe task
    
    toDoList.innerHTML = " "; // leegt oude data uit de DOM
    getTasks(getIdOfTask); //logt nieuwe data in de DOM op bij API incl nieuwste task
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