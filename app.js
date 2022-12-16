const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('<h1>Hellow world_ALTER</h1>')
})
app.listen(process.env.PORT || 5000)

module.exports = app