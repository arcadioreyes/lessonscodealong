import { useState } from "react";

function TaskForm(props) {
  const { tasks, setTasks } = props;

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //add a new task
    const newTask = { id, name, description, isDone: false };
    /* here we are creating a new array named 'updatedTasks'. Thes new array is a copy of "tasks' and it is adding "newTask" at the end of the array*/
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setId("");
    setName("");
    setDescription("");
    // update de state variable "tasks" with my input values
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(event) => setId(event.target.value)}
          id=""
          placeholder="Enter an id"
        />
        <br />

        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter a task name"
        />
        <br />

        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter a description"
        />
        <br />

        <button type="submit">Add New task</button>

        {/* <button onClick={() => deleteTask(task._id)}>Delete Task</button> */}
      </form>
    </div>
  );
}

export default TaskForm;
