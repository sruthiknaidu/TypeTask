type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title?: string;
  status: TaskStatus;
};


let nextId = 1;

// 1. Add a new task — always starts as "todo"
function addTask(tasks: Task[], title: string): Task[] {
  // Create the new task object
  const newTask: Task = { 
    id: nextId, 
    title: title, 
    status: "todo" ,
  };
  
  // Increase nextId for the next task
  nextId = nextId + 1;
  
  // Add the new task directly into the list
  tasks.push(newTask);
  
  return tasks;
}

// 2. Mark a task done by id
function completeTask(tasks: Task[], id: number): Task[] {
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
function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  const result: Task[] = []; // Empty array to hold matching tasks

  // Loop through all tasks
  for (let i = 0; i < tasks.length; i++) {
    // If the task status matches what we want, save it
    if (tasks[i].status === status) {
      result.push(tasks[i]);
    }
  }

  return result;
}