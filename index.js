const express = require("express")
const app = express()

app.use(express.json())

app.listen(4000, ()=>{
    console.log('listening on portn 4000');
})

app.get("/api", (req, res)=>{
    res.status(200).json({
        message: "Welcome to jumia api"
    })
})