import React, {useState} from 'react'

export const EditTodoForm = ({editTask,task}) => {
    const [taskDescription,setTaskDescription] = useState(task.description);
    const [taskTitle,setTaskTitle] = useState(task.title);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const  newTask={
          title:taskTitle,
          description: taskDescription
        };
        editTask(newTask,task._id);
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}> 
         <input type="text" className='todo-input todo-edit-input' value={taskTitle}
        placeholder='Update Title' onChange={(e) => setTaskTitle(e.target.value)} required/>
        <input type="text" className='todo-input todo-edit-input' value={taskDescription}
        placeholder='Update Task Description' onChange={(e) => setTaskDescription(e.target.value)}/>
        <p></p>
        <button type='submit' className='todo-btn todo-edit-btn'>Update Task</button>
    </form>
  )
}
