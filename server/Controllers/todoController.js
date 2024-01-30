import { Todo } from "../Schemas/todo.js";

export const TodoController = {
    getAllTasks: async (req,res) => {
        try {
            const task = await Todo.find().sort({'createdAt': -1});
            res.json(task);
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error '});
        }
    },

    createTask: async (req,res) => {
        const {title, description,dueDate} = req.body;
        try{
            const newTask = new Todo({title,description,dueDate});
            await newTask.save();
            res.json(newTask);
        } catch (error) {
            res.status(400).json({error: 'Bad Request'});
        }
    },

    updateTask: async (req,res) => {
        const {id} = req.params;
        const {title, description} = req.body;
        
        try{
            const task = await Todo.findById(id);
            const isEditing = !task.isEditing;
            const updatedTask = await Todo.findByIdAndUpdate(id,{title,description,isEditing},{new:true});
            res.json(updatedTask);
        } catch (error) {
            res.status(400).json({error: 'Bad Request'});
        }
    },


    toggleComplete: async (req,res) => {
        const {id} = req.params;
        
        try{
            const task = await Todo.findById(id);
            const done = !task.done;
            const updatedTask = await Todo.findByIdAndUpdate(id,{done},{new:true});
            res.json(updatedTask);
        } catch (error) {
            res.status(400).json({error: 'Bad Request'});
        }
    },

    deleteTask: async (req,res) => {
        const {id} = req.params;

        try{
            const deletedTask = await Todo.findByIdAndDelete(id);
            res.json(deletedTask);
        } catch (error) {
            res.status(400).json({error: 'Bad Request'});
            console.log(error);
        }
    }
};