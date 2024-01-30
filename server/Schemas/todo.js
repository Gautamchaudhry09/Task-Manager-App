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
        type:{
            date:String,
            month:String,
            year:String
        },
        default:null
    }
})
export const Todo = new mongoose.model('Todo',todoSchema);