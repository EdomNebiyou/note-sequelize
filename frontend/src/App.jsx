import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import NoteDetails from "./pages/NoteDetails"

export default function App(){
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/:id" element={<NoteDetails/>}/>
      </Route>
    )
  )
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}