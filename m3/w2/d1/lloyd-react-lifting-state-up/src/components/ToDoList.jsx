import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";
import TaskForm from "./TaskForm";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [displayForm, setDisplayForm] = useState(false);

  const toggleTaskDone = (id) => {
    const tasksCopy = [...tasks]; // make a copy of our tasks array

    tasksCopy.forEach((task) => {
      // Find the selected task and update task's `isDone` property,
      if (task._id === id) {
        task.isDone = task.isDone ? false : true;

        // then update `tasksCompleted` state variable
        if (task.isDone) setTasksCompleted(tasksCompleted + 1);
        else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);
      }

      setTasks(tasksCopy); // updating our state 'tasks'
    });
  };

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTaskDone={toggleTaskDone} />
        ))}
      </div>

      <button onClick={() => setDisplayForm(!displayForm)}>
        {displayForm ? "Hide Form" : "Show Add Form"}
      </button>
      {displayForm && <TaskForm tasks={tasks} setTasks={setTasks} />}
    </div>
  );
}

export default ToDoList;
