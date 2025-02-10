import express from "express"
import { errorHandler, notFound } from "./middleware/errorHandler.js"
import sequelize from "./config/db.js"
import noteRouter from "./routes/note.routes.js"

const app=express()
const port=process.env.PORT||3000
app.use(express.json())
app.use("/api/note",noteRouter)
app.use(notFound)
app.use(errorHandler)
sequelize.sync()
.then(()=>{
    console.log('db connected and sync')
    app.listen(port,console.log(`It's alive on http://localhost:${port}`))
})
.catch(error=>console.log(`db connection error = ${error}`))