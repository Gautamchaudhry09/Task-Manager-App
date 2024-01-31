import React, { useState } from 'react'
import axios from 'axios';
export const Form = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const onTitleChange = (e) => {
        setTaskTitle(e.target.value);
    }
    const onDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    }
    const onDateChange = (e) => {
        setTaskDate(e.target.value);
    }

    const formatDateToWords = (dateString) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const [year, month, day] = dateString.split('-');
        const monthIndex = parseInt(month, 10) - 1;

        const formattedDate = `${months[monthIndex]} ${parseInt(day, 10)}, ${year}`;

        return formattedDate;
    }



    const createNewUser = (e) => {
        e.preventDefault();
        const task = {
            title: taskTitle,
            description: taskDescription,
            dueDate: formatDateToWords(taskDate)
        };
        axios.post('https://task-manager-backend-hlgh.onrender.com/tasks', task)
            .then(response => {
                setTaskDescription("");
                setTaskTitle("");
                setTaskDate("");
            })
            .catch(error => {
                console.log('Error adding task', error);
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
                    value={taskDate}
                    onChange={onDateChange}
                    type="date"
                />
                <br></br>
                <button className='todo-btn'>Add Task</button>
            </form>

        </div>
    )
}
