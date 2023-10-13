const express=require("express")
const cors=require("cors")
const app=express()

app.use(cors({
    origin:"*",
}))

app.use(express.json())

require('./conn')

const userRoutes = require('./Routes/userRoutes')
app.use(userRoutes)

const PORT = process.env.port ||8001
app.listen(PORT,()=>{
    console.log(`listening to the port ${PORT}`);
})
