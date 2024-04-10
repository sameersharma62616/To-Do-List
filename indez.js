// This array will store the tasks
let tasks = [];

// Function to add a task
function ADD() {
    // Get the input value
    const taskInput = document.getElementById("inp").value;

    // Check if the input is not empty
    if (taskInput !== "") {
        // Add the task to the array
        tasks.push(taskInput);
        
        // Update the task list
        updateTaskList();
        
        // Clear the input field
        document.getElementById("inp").value = "";
    } else {
        alert("Please enter a task!");
    }
}

// Function to update the task list
function updateTaskList() {
    const taskContainer = document.querySelector('.text');
    // Clear existing task list
    taskContainer.innerHTML = "";

    // Add each task to the task list
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `
            <input type="checkbox" id="task${index}" onclick="completeTask(${index})">
            <label for="task${index}">${task}</label>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskContainer.appendChild(taskItem);
    });
}

// Function to mark a task as completed
function completeTask(index) {
    const taskLabel = document.querySelector(`#task${index} + label`);
    taskLabel.style.textDecoration = "line-through";
    taskLabel.style.color = "#aaa";
}

// Function to delete a task
function deleteTask(index) {
    // Remove the task from the array
    tasks.splice(index, 1);
    
    // Update the task list
    updateTaskList();
}
