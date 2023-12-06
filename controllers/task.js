import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";


export const newTask = async (req,res,next)=>{
    try {
        const {title,discription}= req.body;

        await Task.create({
            title,
            discription,
            user:req.user,
        })
        res.status(201).json({
            success:true,
            message:"Task Added Successfully!",
        })
    } catch (error) {
        next(error);
    }
}

export const getMyTask = async (req,res,next)=>{
    try {
        const userid = req.user._id
        const tasks = await Task.find({user:userid});

        res.status(200).json({
            success:true,
            tasks,
        })
    } catch (error) {
        next(error);
    }
}
export const updateTask = async (req,res,next)=>{
    try {
        const task = await Task.findById(req.params.id);

        if(!task) return next(new ErrorHandler("Task Not Found",404));
            
    
        task.isCompleted = !task.isCompleted;
        await task.save();
    
        res.status(200).json({
            success:true,
            message:"Task Updated Successfully",
        })
    } catch (error) {
        next(error);
    }
}
export const deleteTask = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
    
        if(!task) return next(new Error("Invalid ID"));
    
        await task.deleteOne({ _id:id });
        res.status(200).json({
            success:true,
            message:"Task Deleted Successfully",
        })
    } catch (error) {
        next(error);
    }
}