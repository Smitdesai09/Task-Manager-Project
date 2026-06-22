import { useState } from "react"

export function TaskInput({ tasks, setTasks }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date().toLocaleDateString('sv-SE'))

    const createTask = () => {
        setTasks(
        [...tasks, { 
            id: crypto.randomUUID(),
            title: title,
            description: description,
            dueDate: dueDate,
            isCompleted: false
        }]
        )
        console.log(`Title: ${title}\nDescription: ${description}`);
        setTitle('');
        setDescription('');
    }

    return(
        <div>
            <input 
                type="text"
                placeholder="Title"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
            />
            <input 
                type="text"
                placeholder="Description"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
            />
            <input 
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
            />
            <button onClick={createTask}>Create Task</button>
        </div>
    )
}