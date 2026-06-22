/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Task } from "./Task"

export function Tasks({ tasks }){
    const taskComponents = tasks.map((task) => {
        return (
            <Task
                key={task.id}
                title={task.title}
                description={task.description}
                dueDate={task.dueDate}
                isCompleted={task.isCompleted}
            />
        );
    });

    return(
        <>
            {taskComponents}
        </>
    )
}