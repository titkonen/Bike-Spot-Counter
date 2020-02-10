import React, { useState, useEffect } from 'react';
import './Todo.css';

function Task({ task, index, completeTask }) {
    return (
        <div
            className="task"
            >
                {task.title}
                <button onClick={() => completeTask(index)}>Add +1</button> 
            </div> 
    );
}

function Todo() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        {
            title: "Kivikko",
            completed: false
        }      
    ]);
    const [spotAmount] = useState(0);

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length)
    });


    // Adds new task
    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    // Completes the task MUUTA TÄMÄ LISÄÄ YKSI TASK
    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    


    return (
        <div className="todo-container">
            <div className="header">BikeSpots
                <div className="taskNumber">
                    {tasksRemaining}
                </div>
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
            <div className="tasks">
                {tasks.map((task, index) => (
                   <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        key={index}
                    />    
                ))}
            </div>
        </div>
    );
}

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        addTask(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new spots"
                onChange={e => setValue(e.target.value)}
            />    
        </form>
    );
}

export default Todo;