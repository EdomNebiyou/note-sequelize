import { useNavigate, useParams } from "react-router-dom"
import { useCreateNoteMutation, useUpdateNoteMutation } from "../api/noteApi"
import { useState } from "react"
export default function NoteForm({isEditing=false,initialState=null}){
    const [title,setTitle]=useState(isEditing?initialState.title:'')
    const navigate=useNavigate()
    const {id}=useParams()
    const [updateNote,{isLoading:isUpdating}]=useUpdateNoteMutation()
    const [createNote,{isLoading:isCreating}]=useCreateNoteMutation()
    async function handleSubmit(e){
        e.preventDefault()
        const note={title}
        try {
            if(isEditing){
                await updateNote({id,...note}).unwrap()
            }else{
                await createNote(note).unwrap()
                setTitle('')
            }
            navigate('/')
        } catch (error) {
            if(isEditing){
                console.error("Error editing note:",error)
            }else{
                console.log("Error creating note:",error)
            }
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button disabled={isCreating||isUpdating}>{isEditing?'update note':'create note'}</button>
        </form>
        </>
    )
}