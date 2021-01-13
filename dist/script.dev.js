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
  checkBox.type = "checkbox";
  checkBox.classList.add("checkBox");
  checkBox.checked = task.done; // wanneer taak gedaan is, blijft checkbox checked

  var newTask = document.createElement("input");
  newTask.type = "text";
  newTask.value = "".concat(task.description);
  newTask.setAttribute("id", task._id);
  newTask.disabled = true;
  newTask.classList.add("task_input");

  if (checkBox.checked) {
    newTask.classList.add("striketrough");
  }

  ; //checked>strike

  var editButton = document.createElement("button");
  editButton.innerHTML = "<i class=\"fas fa-edit\"></i>";
  editButton.classList.add("editButton");
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "<i class=\"far fa-trash-alt\"></i>";
  removeButton.classList.add("removeButton");
  toDoList.append(taskBox);
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
        var data = {
          description: newTaskText,
          done: false
        };
        putData(task._id, data);
        newTask.disabled = true;
        newTask.classList.remove("edit_task");
      }

      ;
    });
  }); // <-------------------CHECK TASKS------------------------------>

  checkBox.addEventListener("change", function _callee(event) {
    var data, _data;

    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (checkBox.checked === true) {
              newTask.classList.add("striketrough");
              data = {
                description: "".concat(task.description),
                done: true
              };
              putData(task._id, data);
            } else if (checkBox.checked === false) {
              newTask.classList.remove("striketrough");
              _data = {
                description: "".concat(task.description),
                done: false
              };
              putData(task._id, _data);
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
}; // <------------------ ADDS & POSTS A NEW TASK ------------------>


var addNewTask = function addNewTask() {
  var newTaskInput, getIdOfTask;
  return regeneratorRuntime.async(function addNewTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          newTaskInput = {
            description: inputField.value,
            done: false
          }; // 1.wat je wilt toevoegen aan de DOM

          createNewTaskBox(newTaskInput); // 1.adds taskbox to the DOM

          inputField.value = " "; // 1.empties inputfield in the DOM

          _context3.next = 5;
          return regeneratorRuntime.awrap(postData(newTaskInput));

        case 5:
          getIdOfTask = _context3.sent;

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
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