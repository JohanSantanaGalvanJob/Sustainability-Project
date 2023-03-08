const express = require ('express')
const app = express()

app.listen(BACKEND_PORT, () => {
    console.log('running on port 3001')
})

// app.get("/api",(req,res) => {
//     res.json
// })