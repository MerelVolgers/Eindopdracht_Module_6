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
          getTask = data.forEach(function (task) {
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
  checkBox.checked = task.done; // wanneer taak gedaan is, blijft checkbox checked na reload

  var newTask = document.createElement("input");
  newTask.type = "text";
  newTask.value = "".concat(task.description);
  newTask.setAttribute("id", task._id);
  newTask.disabled = true;
  newTask.classList.add("task_input");

  if (checkBox.checked) {
    newTask.classList.add("striketrough");
  }

  ; //checked>striketext

  var editButton = document.createElement("button");
  editButton.innerHTML = "<i class=\"fas fa-edit\"></i>";
  editButton.classList.add("editButton");
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "<i class=\"far fa-trash-alt\"></i>";
  removeButton.classList.add("removeButton"); // <-------------------- REMOVE BUTTON -------------------------->

  removeButton.addEventListener("click", function (event) {
    taskBox.remove();
    deleteDataById(task._id);
  }); // <----------------- EDIT TASKS ------------------------------>

  editButton.addEventListener("click", function _callee() {
    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(putData());

          case 2:
            newTask.disabled = !newTask.disabled;
            newTask.classList.add("edit_task");
            newTask.addEventListener("keyup", function (event) {
              if (event.keyCode === 13) {
                var data = {
                  description: event.target.value,
                  done: checkBox.checked
                };
                putData(task._id, data);
                newTask.disabled = true;
                newTask.classList.remove("edit_task");
              }

              ;
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  }); // <-------------------CHECK TASKS------------------------------>

  checkBox.addEventListener("change", function _callee2(event) {
    var data, _data;

    return regeneratorRuntime.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(putData());

          case 2:
            if (checkBox.checked) {
              newTask.classList.add("striketrough");
              data = {
                description: "".concat(task.description),
                done: checkBox.checked
              };
              putData(task._id, data);
            } else {
              newTask.classList.remove("striketrough");
              _data = {
                description: "".concat(task.description),
                done: checkBox.checked
              };
              putData(task._id, _data);
            }

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
  toDoList.append(taskBox);
  taskBox.append(checkBox, newTask, editButton, removeButton);
}; // <------------------ ADDS & POSTS A NEW TASK ------------------>


var addNewTask = function addNewTask() {
  var newTaskInput, getIdOfTask;
  return regeneratorRuntime.async(function addNewTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          newTaskInput = {
            description: inputField.value,
            done: false
          }; // 1.wat je wilt toevoegen aan de DOM

          createNewTaskBox(newTaskInput); // 1.adds taskbox to the DOM

          inputField.value = " "; // 1.empties inputfield in the DOM

          _context4.next = 5;
          return regeneratorRuntime.awrap(postData(newTaskInput));

        case 5:
          getIdOfTask = _context4.sent;
          //2. stuurt data naar API om id terug te krijgen    
          getTasks(getIdOfTask); //logt nieuwe data in de DOM op bij API incl nieuwste task

          toDoList.innerHTML = " "; // leegt oude data uit de DOM

        case 8:
        case "end":
          return _context4.stop();
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