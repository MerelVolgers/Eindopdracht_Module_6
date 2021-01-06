const addTaskButton = document.getElementById("addTaskButton");
const toDoList = document.getElementById("list");
const inputField = document.getElementById("input");
const removeAllButton = document.getElementById("removeAllButton");



const getTasks = async () => {
    const data = await getData();
    const getTask = data.map(item => {
        // const taskItem = item.description;
        const task = document.createElement("li");
        task.innerHTML = item.description;
        toDoList.append(task);
        input.value = " ";
    })
}
getTasks();


inputField.addEventListener("keyup", (event) =>{
    newTaskInput = event.target.value
});


addTaskButton.addEventListener("click", () => {
    
    if (inputField.value == " ") {
        alert ("Type a new task to add something");
    } else {
        getData().then (data => {
            const newTask = document.createElement("li");
            newTask.innerHTML = newTaskInput;
            toDoList.append(newTask);
            inputField.value =" ";
        })
    }
    
});

removeAllButton.addEventListener("click", (event) => {
    toDoList.innerHTML = " ";
})

