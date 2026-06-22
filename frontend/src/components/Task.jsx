
export function Task({ isCompleted, title, description, dueDate }){
    return(
        <div>
            <input
                type="checkbox"
                checked={isCompleted}
            />
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{dueDate}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}