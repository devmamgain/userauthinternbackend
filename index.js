const express = require("express")
require('dotenv').config();
const app = express()
const port = process.env.PORT
const cors = require("cors")
const connectiondb = require("./mongoose/mongoose")
const authrouter = require("./routes/auth.router")
app.use(cors())
app.use(express.json())
connectiondb()

app.use("/api/auth", authrouter)


app.listen(port, ()=>{
    console.log("server started at ", port)
}) 