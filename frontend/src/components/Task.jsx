/* eslint-disable no-unused-vars */

export function Task({ id, title, description, dueDate, isCompleted, toggleTask, deleteTask, setEdit }){
    return(
        <div>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => toggleTask(id)}
            />
            <h4>{title}</h4>
            <p>{ (description === "") ? "-" : description}</p>
            <p>{dueDate}</p>
            <button
                onClick={() => setEdit(id)}
            >Edit</button>
            <button
                onClick={() => deleteTask(id)}
            >Delete</button>
        </div>
    )
}