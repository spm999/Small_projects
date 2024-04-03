document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to display tasks
    function displayTasks() {
        taskList.innerHTML = "";
        tasks.forEach(function(task, index) {
            const li = document.createElement("li");
            li.textContent = task;
            li.setAttribute("data-index", index);
            taskList.appendChild(li);
        });
        updateLocalStorage();
    }

    // Function to add a new task
    function addTask() {
        if (taskInput.value !== "") {
            tasks.push(taskInput.value);
            displayTasks();
            taskInput.value = "";
        }
    }

    // Function to remove a task
    function removeTask(e) {
        if (e.target.nodeName === "LI") {
            const index = e.target.getAttribute("data-index");
            tasks.splice(index, 1);
            displayTasks();
        }
    }

    // Function to update local storage
    function updateLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Event listeners
    addTaskBtn.addEventListener("click", addTask);
    taskList.addEventListener("click", removeTask);

    // Display tasks on page load
    displayTasks();
});
