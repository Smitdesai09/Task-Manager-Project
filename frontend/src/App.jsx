import { useState } from 'react';
import './App.css'
import { Tasks } from './components/Tasks';
import { TaskInput } from './components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([
          {
              id: crypto.randomUUID(),
              title: "Bug Charger",
              description: "Go the mobile shop and buy Type-C charger.",
              dueDate: '2026-06-24',
              isCompleted: false
          },
          {
              id: crypto.randomUUID(),
              title: "Complete Assignment",
              description: "Finish the React assignment for the task manager app.",
              dueDate: '2026-06-26',
              isCompleted: false
          }
      ]);

  return (
    <>
      <h1>Task Manager</h1>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} />
    </>
  )
}

export default App
