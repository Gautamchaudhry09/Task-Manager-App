import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    } ,
    description: String,
    isEditing:{
        type:Boolean,
        default:false
    },
    done:{
        type: Boolean,
        default: false
    },
    dueDate:{
        type:String,
        default:"no Due Date"
    }
})
export const Todo = new mongoose.model('Todo',todoSchema);