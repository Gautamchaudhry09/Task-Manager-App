import React, { useState } from 'react'
import axios from 'axios';
export const Form = () => {
    const [taskTitle,setTaskTitle] = useState("");
    const [taskDescription,setTaskDescription] = useState("");
    const [taskDate,setTaskDate] = useState(undefined);
    const [inputType, setInputType] = useState('text');
    const [date,setDate] = useState("");
    const onTitleChange = (e) => {
        setTaskTitle(e.target.value);
    }
    const onDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    }
    const onDateChange = (e) => {
            dateChange();
            const newDate = new Date(e.target.value);
            setTaskDate(newDate);
            console.log(taskDate);
    }
    const dateChange=() => {
        try{
            setDate(taskDate ? taskDate.toISOString().split('T')[0] : '');
        } catch(error) {
            console.log(error);
        }
    }

    const createNewUser = (e) =>{
        e.preventDefault();
        const task = {
            title: taskTitle,
            description: taskDescription,
            dueDate:{
                date:taskDate.getDate(),
                month:taskDate.getMonth()+1,
                year:taskDate.getFullYear()
            }
        };
        axios.post('http://localhost:8000/tasks',task)
        .then(response => {
            setTaskDescription("");
            setTaskTitle("");
            setTaskDate(null);
            setDate("");
        })
        .catch(error => {
            console.log('Error adding task',error);
        });
    }
 
  return (
    <div className='form'>
        <form className='TodoForm' onSubmit={createNewUser}>
            <input
                placeholder='Enter title...'
                className='todo-input'
                onChange={onTitleChange}
                value={taskTitle}
                required
                />
                <input
                placeholder='Enter Task Description...'
                className='todo-input'
                value={taskDescription}
                onChange={onDescriptionChange}
                />
                <br></br>
                <input
                placeholder="Enter Due Date (optional)"
                className='todo-input'
                value={date}
                onChange={onDateChange}
                type={inputType}
                onFocus={() => setInputType('date')}
                onBlur={() => setInputType('text')}
                />
                <br></br>
                <button className='todo-btn'>Add Task</button>
        </form>
        
    </div>
  )
}
