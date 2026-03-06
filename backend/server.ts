import express from "express"
import familyRoute from "./routes/family.route.ts"
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/family',familyRoute)

app.listen(3000,()=>{
    console.log("Server is running 30000");
    
})