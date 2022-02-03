const express = require('express')
const app = express()
const port = 8080;
const model = require('./models')
var userCtrl = require('./controllers/userController')

app.get('/',(req,res)=>{
    res.send("Home page")
});

app.get('/add',userCtrl.addUser)

app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`)
})