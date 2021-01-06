const addTaskButton = document.getElementById("addTaskButton");
const toDoList = document.getElementById("list");
const inputField = document.getElementById("input");
const removeAllButton = document.getElementById("removeAllButton");
const trashBin = `<button><i id="trash" class="far fa-trash-alt"></i></button>`;

const getTasks = async () => {
    const data = await getData();
    const getTask = data.map(task =>{
        createNewItem(task);
    });
}
getTasks();

const createNewItem = (task) => {
    const newTask = document.createElement("li");
    newTask.innerHTML = (`${task.description} ${trashBin}`);
    newTask.classList.add("task");
    // newTask.setAttribute("id", task._id);
    toDoList.append(newTask);
    input.value = " ";
}

addTaskButton.addEventListener("click", (event) => {
    if (inputField.value == " ") {
        alert ("Type a new task to add something");
    } else {
        let task = {description: newTaskInput, done:false};
        createNewItem(task);
        postData(task); // <--- iets gaat hier mis, wordt wel in de DOM geshowd, maar niet gepost
    }
})

inputField.addEventListener("keyup", (event) =>{
    newTaskInput = event.target.value
}); 

removeAllButton.addEventListener("click", (event) => {
    toDoList.innerHTML = " ";
})

// trashBin.addEventListener("click", (event) => {
//     //  let task = {done:true};
//     toDoList.innerHTML = " ";
// })




