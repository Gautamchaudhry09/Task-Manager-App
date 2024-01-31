import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { Form } from './Form';
import axios from 'axios';
import { EditTodoForm } from './EditTodoForm';
import { Task } from './Task';
uuidv4();

export const TodoWrapper = () => {
    const [tasks, setTasks] = useState([]);
    const [status,setStatus] = useState("");

    useEffect(()=>{
        axios.get('https://task-manager-backend-hlgh.onrender.com/tasks')
        .then(response => {
            setTasks(response.data);
        })
        .catch(error => {
            console.log('Error adding task',error);
        });
        console.log(tasks);
    })

    const handleAll = () => {
        setStatus("");
    }

    const handleActive = () => {
        setStatus("active");
    }

    const handleCompleted = () => {
        setStatus("completed");
    }

    const getTasks = () => {
        if(status == "active"){
            return tasks.filter(task => !task.done);
        }
        else if(status == "completed"){
            return tasks.filter(task => task.done);
        }
        else{
            return tasks;
        }
    }

    return (
        <div className='TodoWrapper'>
            <h1>Add New Task!</h1>
            <hr></hr>

            <Form/>

            <hr></hr>
            <div className='tabs-container'>
                <button className='tabs' onClick={handleAll} >All Tasks</button>
                <button className='tabs' onClick={handleActive} >Active  Tasks</button>
                <button className='tabs' onClick={handleCompleted} >Completed Tasks</button>
            </div>
            <hr></hr>
            
            {getTasks().map((task,index) => (
                <Task task={task} key={index}/>
            ))}
            
        </div>
    )
}
