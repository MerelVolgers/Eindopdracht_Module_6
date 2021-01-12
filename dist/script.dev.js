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
            createNewTaskBox(task);
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

getTasks(); // <--------------- CREATES A NEW TASK ------------------------->

var createNewTaskBox = function createNewTaskBox(task) {
  var taskBox = document.createElement("div");
  taskBox.classList.add("taskBox");
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox"; // checkBox.checked = false;

  checkBox.classList.add("checkBox");
  var newTask = document.createElement("input");
  newTask.type = "text";
  newTask.value = "".concat(task.description);
  newTask.setAttribute("id", task._id);
  newTask.disabled = true;
  newTask.classList.add("task_input");
  var editButton = document.createElement("button");
  editButton.innerHTML = "<i class=\"fas fa-edit\"></i>";
  editButton.classList.add("editButton");
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "<i class=\"far fa-trash-alt\"></i>";
  removeButton.classList.add("removeButton");
  toDoList.appendChild(taskBox);
  taskBox.append(checkBox, newTask, editButton, removeButton); // <-------------------- REMOVE BUTTON -------------------------->

  removeButton.addEventListener("click", function (event) {
    taskBox.remove();
    deleteDataById(task._id);
  }); // <----------------- EDIT TASKS ------------------------------>

  editButton.addEventListener("click", function () {
    newTask.disabled = !newTask.disabled;
    newTask.classList.add("edit_task");
    newTask.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        var newTaskText = event.target.value;
        var editedTask = {
          description: newTaskText,
          done: false
        };
        putData(task._id, editedTask);
        newTask.disabled = true;
        newTask.classList.remove("edit_task");
      }

      ;
    });
  }); // <-------------------CHECK TASKS------------------------------>

  checkBox.addEventListener("change", function (event) {
    if (checkBox.checked == true) {
      newTask.classList.add("striketrough");
      var taskDone = {
        description: "".concat(task.description),
        done: true
      };
      putData(task._id, taskDone);
    } else if (checkBox.checked == false) {
      newTask.classList.remove("striketrough");
      var _taskDone = {
        description: "".concat(task.description),
        done: false
      };
      putData(task._id, _taskDone);
    }
  });
}; // <------------------ ADDS & POSTS A NEW TASK ------------------>


var addNewTask = function addNewTask() {
  var newTaskInput = inputField.value;
  var task = {
    description: newTaskInput,
    done: false
  };
  createNewTaskBox(task);
  postData(task);
  inputField.value = " ";
};

inputField.addEventListener("keyup", function (event) {
  if (inputField.value == " ") {
    alert("Type a new task to add something!");
  } else if (event.keyCode === 13) {
    addNewTask();
  }
});
addTaskButton.addEventListener("click", function (event) {
  if (inputField.value == " ") {
    alert("Type a new task to add something!");
  } else {
    addNewTask();
  }
});