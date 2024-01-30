import React from 'react'
import { EditTodoForm } from './EditTodoForm'
import { Todo } from './Todo'
import axios from 'axios'

export const Task = ({task,index}) => {
    const toggleComplete = (id) => {
        axios.put(`http://localhost:8000/tasks/toggleComplete/${id}`)
            .catch(error => {
                console.log('Error updating task(togglecomplete)',error);
            });
    }

    const deleteTask = (id) => {
         axios.delete(`http://localhost:8000/tasks/${id}`)
        .then(response => {
            // setTasks(response.data);
        })
        .catch(error => {
            console.log('Error deleting task',error);
        });
    }


    const editTask = (task,id) => {
            axios.put(`http://localhost:8000/tasks/${id}`,task)
            .catch(error => {
                console.log('Error updating task',error);
            });
    }
  return (

    <div>
        {task.isEditing ? (
                    <EditTodoForm task={task} key={index} editTask={editTask}/>
                ) : (
                <Todo task={task} key={index} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
            )}
    </div>
  )
}
