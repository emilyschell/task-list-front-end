import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm.js';

const URL = 'https://stormy-badlands-08394.herokuapp.com/tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    axios
      .get(URL)
      .then((response) => {
        const newTasks = response.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getTasks(), []);

  const toggleComplete = (id, isComplete) => {
    const updateURL = isComplete
      ? `${URL}/${id}/mark_incomplete`
      : `${URL}/${id}/mark_complete`;
    axios
      .patch(updateURL)
      .then(() => getTasks())
      .catch((err) => console.log(err));
  };

  const deleteTask = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => getTasks())
      .catch((err) => console.log(err));
  };

  const addTask = (newTask) => {
    axios
      .post(URL, newTask)
      .then(() => getTasks())
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            onUpdateTask={toggleComplete}
            onDeleteTask={deleteTask}
          />
          <NewTaskForm addTaskCallback={addTask} />
        </div>
      </main>
    </div>
  );
};

export default App;
