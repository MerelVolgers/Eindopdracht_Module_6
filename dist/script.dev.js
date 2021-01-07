"use strict";

var addTaskButton = document.getElementById("addTaskButton");
var toDoList = document.getElementById("toDoList");
var inputField = document.getElementById("input"); // <-------------- LOADS SAVED TASKS ----------------------->

var getTasks = function getTasks() {
  var data, getTask;
  return regeneratorRuntime.async(function getTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getData());

        case 2:
          data = _context.sent;
          getTask = data.map(function (task) {
            createNewItem(task);
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

getTasks(); // <--------------- CREATES A NEW TASK ------------------------->

var createNewItem = function createNewItem(task) {
  var taskBox = document.createElement("div");
  taskBox.classList.add("taskBox");
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = false;
  checkBox.classList.add("checkBox");
  var editButton = document.createElement("button");
  editButton.innerHTML = "<i class=\"fas fa-edit\"></i>";
  editButton.classList.add("editButton");
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "<i class=\"far fa-trash-alt\"></i>";
  removeButton.classList.add("removeButton");
  var newTask = document.createElement("input");
  newTask.value = "".concat(task.description);
  newTask.disabled = true;
  newTask.classList.add("task_input");
  newTask.setAttribute("id", task._id);
  newTask.type = "text";
  toDoList.appendChild(taskBox);
  taskBox.appendChild(checkBox);
  taskBox.appendChild(newTask);
  taskBox.appendChild(editButton);
  taskBox.appendChild(removeButton);
  input.value = " ";
  removeButton.addEventListener("click", function () {
    taskBox.remove();
    deleteDataById(task._id);
  });
  editButton.addEventListener("click", function () {});
}; // <------------------ ADDS & POSTS A NEW TASK ------------------>


addTaskButton.addEventListener("click", function (event) {
  if (inputField.value == " ") {
    alert("Type a new task to add something");
  } else {
    var task = {
      description: newTaskInput,
      done: false
    };
    createNewItem(task);
    postData(task);
  }
});
inputField.addEventListener("keyup", function (event) {
  newTaskInput = event.target.value;
}); // <--------------------CHECKBOX ------------------------------>
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