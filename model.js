"use strict";
;
let nextId = 1;
// 1. Add a new task — always starts as "todo"
function addTask(tasks, title) {
    // Create the new task object
    const newTask = {
        id: nextId,
        title: title,
        status: "todo",
    };
    // Increase nextId for the next task
    nextId = nextId + 1;
    // Add the new task directly into the list
    tasks.push(newTask);
    return tasks;
}
// 2. Mark a task done by id
function completeTask(tasks, id) {
    // Loop through every task in the list
    for (let i = 0; i < tasks.length; i++) {
        // Check if this task's id matches the target id
        if (tasks[i].id === id) {
            tasks[i].status = "done"; // Change its status
        }
    }
    return tasks;
}
// 3. Return only the tasks matching a given status
function filterByStatus(tasks, status) {
    const result = []; // Empty array to hold matching tasks
    // Loop through all tasks
    for (let i = 0; i < tasks.length; i++) {
        // If the task status matches what we want, save it
        if (tasks[i].status === status) {
            result.push(tasks[i]);
        }
    }
    return result;
}
