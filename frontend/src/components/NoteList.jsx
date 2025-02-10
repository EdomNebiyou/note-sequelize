import { Link } from "react-router-dom"
import { useDeleteNoteMutation, useGetNotesQuery } from "../api/noteApi"

export default function NoteList(){
    const {data:notes,error,isLoading}=useGetNotesQuery()
    const [deleteNote,{isLoading:isDeleting}]=useDeleteNoteMutation()
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
        <h1>NoteList</h1>
        {
            notes.map(n=>(
                <div key={n.id} className="NoteList">
                    <Link to={`/${n.id}`}>{n.title}</Link>
                    <button onClick={()=>deleteNote(n.id)} disabled={isDeleting}>delete</button>
                </div>
            ))
        }
        </>
    )
}