import express from "express"
import allMemberRoute from "./router/family.router.ts"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/family',allMemberRoute)

app.listen(3000,()=>{
    console.log("server is running on 3000")
})