const addTaskButton = document.getElementById("addTaskButton");
const toDoList = document.getElementById("toDoList");
const inputField = document.getElementById("input");

// <-------------- LOADS SAVED TASKS ----------------------->

const getTasks = async () => {
    const data = await getData();
    const getTask = data.map(task =>{
        createNewItem(task);
    });
}
getTasks();

// <--------------- CREATES A NEW TASK ------------------------->
const createNewItem = (task) => {
    const taskBox = document.createElement("div");
    taskBox.classList.add("taskBox");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = false;
    checkBox.classList.add("checkBox");
    
    const editButton = document.createElement("button");
    editButton.innerHTML = (`<i class="fas fa-edit"></i>`)
    editButton.classList.add("editButton");

    const removeButton = document.createElement("button");
    removeButton.innerHTML = (`<i class="far fa-trash-alt"></i>`)
    removeButton.classList.add("removeButton");

    const newTask = document.createElement("input");
    newTask.value = (`${task.description}`);
    newTask.disabled = true;
    newTask.classList.add("task_input");
    newTask.setAttribute("id", task._id);
    newTask.type="text";

    toDoList.appendChild(taskBox);
    taskBox.appendChild(checkBox);
    taskBox.appendChild(newTask);
    taskBox.appendChild(editButton);
    taskBox.appendChild(removeButton);

    input.value = " ";

    removeButton.addEventListener("click", () =>{
        taskBox.remove();
        deleteDataById(task._id);
    });

    editButton.addEventListener("click", () => {

    });

};

// <------------------ ADDS & POSTS A NEW TASK ------------------>

addTaskButton.addEventListener("click", (event) => {
    if (inputField.value == " ") {
        alert ("Type a new task to add something");
    } else {
        let task = {description: newTaskInput, done:false};
        createNewItem(task);
        postData(task); 
    }
})

inputField.addEventListener("keyup", (event) =>{
    newTaskInput = event.target.value
}); 

// <--------------------CHECKBOX ------------------------------>
// const checkedCheckBox = (task) => {
//     if (checkBox.checked == true){
//         taskBox.classList.add("strikeTrough") ;   
//     }
// };

// <---------------------- EDIT BUTTON -------------------------->

// editButton.addEventListener("click", (event) =>{
//      input.disabled =!input.disabled;
//      const newTaskText = event.target.value;
//      let editedTask = {description: newTaskText, done: false}
//      putData(task);
// })
//

// editButton.addEventListener("click", (event) =>{
//     this.edit(input)
// })
// edit(input){
//     input.disabled =!input.disabled;
// }

