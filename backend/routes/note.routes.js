import express from "express"
import asyncHandler from "express-async-handler"
import Note from "../models/note.model.js"

const noteRouter=express.Router()

noteRouter.get('/',asyncHandler(async(req,res)=>{
    const notes=await Note.findAll()
    res.json(notes)
}))
noteRouter.post('/',asyncHandler(async(req,res)=>{
    const {title}=req.body
    const note=await Note.create({
        title
    })
    res.status(201).json(note)
}))
noteRouter.get('/:id',asyncHandler(async(req,res)=>{
    const note=await Note.findByPk(req.params.id)
    if(note){
        res.json(note)
    }else{
        res.status(404)
        throw new Error("Note not found")
    }
}))
noteRouter.put('/:id',asyncHandler(async(req,res)=>{
    const note=await Note.findByPk(req.params.id)
    if(note){
        const title=req.body.title||note.title
        await note.update({title})
        res.json(note)
    }else{
        res.status(404)
        throw new Error("Note not found")
    }
}))
noteRouter.delete('/:id',asyncHandler(async(req,res)=>{
    const note=await Note.findByPk(req.params.id)
    if(note){
        await note.destroy()
        res.json(note)
    }else{
        res.status(404)
        throw new Error("Note not found")
    }
}))
export default noteRouter