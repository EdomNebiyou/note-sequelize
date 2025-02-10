import { useParams } from "react-router-dom"
import { useGetNoteQuery } from "../api/noteApi"
import NoteForm from "../components/NoteForm"

export default function NoteDetails(){
    const {id}=useParams()
    const {data:note,isLoading,error}=useGetNoteQuery(id)
    if(isLoading){
        return(
            <>
            <p>Loading notes...</p>
            </>
        )
    }
    if(error){
        return(
            <>
            <p>Error loading notes: {error.data.message}</p>
            </>
        )
    }
    return(
        <>
        <h2>note details {id}</h2>
        <NoteForm isEditing={true} initialState={note}/>
        </>
    )
}