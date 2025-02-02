const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const inputField = document.getElementById("input");
const prioSelector = document.getElementById("prioSelector");
const taskList = document.getElementById("list");

inputField.addEventListener("input", toggleButton);

//task can be added by pressing button/enter
addBtn.addEventListener("click", addTask);
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && inputField.value.trim() !== "") {
    addTask();
  }
});
clearBtn.addEventListener("click", clearAllTasks);

document.addEventListener("DOMContentLoaded", renderTasks());

function toggleButton() {
  if (inputField.value.trim() !== "") {
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
}

function getStorage() {
  return JSON.parse(localStorage.getItem("tasksToDo")) || [];
}

function renderTasks() {
  const tasks = getStorage();
  taskList.innerHTML = "";

  //displaying all current tasks
  tasks.map((task) => {
    const newTask = document.createElement("li");
    const newTaskPrio = document.createElement("span");
    newTask.innerHTML = `<span>${task.task}</span>`;
    console.log(task.priority);
    newTaskPrio.innerHTML = newTaskPrio.innerHTML =
      task.priority === "3" ? "🟢" : task.priority === "2" ? "🟠" : "🔴";

    newTask.appendChild(newTaskPrio);
    taskList.appendChild(newTask);
  });
}

function addTask() {
  const tasks = getStorage();
  if (inputField.value.trim() === "") return;

  tasks.push({ task: inputField.value, priority: prioSelector.value });

  localStorage.setItem("tasksToDo", JSON.stringify(tasks));
  renderTasks();
  addBtn.disabled = true;
  inputField.value = "";
}

function clearAllTasks() {
  localStorage.removeItem("tasksToDo", JSON.stringify([]));
  taskList.innerHTML = "";
}
