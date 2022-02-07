const express = require('express')
const app = express()
const port = 3000;
const model = require('./models')
var userCtrl = require('./controllers/userController')

app.get('/',(req,res)=>{
    res.send("Home page")
});

app.get('/add',userCtrl.addUser)
app.get('/CRUD',userCtrl.crudOperation)

app.get('/query',userCtrl.queryData)
app.get('/finder',userCtrl.finderData)

app.get('/setter-getter',userCtrl.setterGetter);
app.get('/validation',userCtrl.validationCont);
app.get('/raw-query',userCtrl.rawQuery);

app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`)
})