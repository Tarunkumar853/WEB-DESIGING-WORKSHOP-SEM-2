const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskButton");
const list = document.getElementById("taskList");
let tasks = [];

button.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Write a task first.");
    return;
  }

  const task = {
    id: Date.now() + Math.random(),
    text: taskText,
    completed: false
  };

  tasks.push(task);
  create(task);
  saveTasks();
}

function create(task) {
  const li = document.createElement("li");
  li.textContent = task.text;
  li.classList.toggle("completed", task.completed);
  list.append(li);
  input.value = "";

  const del = document.createElement("button");
  del.textContent = "Delete";
  li.append(del);

  del.addEventListener("click", function () {
    li.remove();
    tasks = tasks.filter(function (item) {
      return item.id !== task.id;
    });
    saveTasks();
  });

  const mark = document.createElement("button");
  mark.textContent = "Mark as Completed";
  li.append(mark);

  mark.addEventListener("click", function () {
    task.completed = !task.completed;
    li.classList.toggle("completed", task.completed);
    saveTasks();
  });
}

window.onload = function () {
  const savedTasks = localStorage.getItem("tasks");

  if (!savedTasks) {
    return;
  }

  tasks = JSON.parse(savedTasks).map(function (task) {
    if (typeof task === "string") {
      return { id: Date.now() + Math.random(), text: task, completed: false };
    }

    return task;
  });

  tasks.forEach(create);
  saveTasks();
};
