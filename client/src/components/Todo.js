import React, {useState} from 'react';

export const Todo = ({task,toggleComplete,deleteTask,editTask}) => {
  return (
    <div className = 'Todo'>
        <div onClick={()=> toggleComplete(task._id)} className={`${task.done ? 'completed' : "task"}`}>
          <h2 className='task-title'>{task.title}</h2>
          <p className='todo-description'> {task.description}</p>
        {task.dueDate ? (
          <p className='duedate'>dueDate: {task.dueDate}</p>
          ) : ( <p className='duedate'>no Due Date</p>) }
        </div>
        <div>
            <i onClick={() => editTask(task,task._id)} type="button" className="fi fi-rr-edit btn-edit"></i>
            <p></p>
            <i onClick={() => deleteTask(task._id)} type="button" className="fi fi-rr-trash btn-delete"></i>
            <p></p>

        </div>
    </div>
  )
}
