
var db = require('../models');
const Users = db.users;

var addUser = async (req,resp)=>{
    let data = await Users.build({name:'Test',email:'test2@gmail.com'})
    await data.save();

    let response = {
        data: 'ok'
    }
    resp.status(200).json(response)
}

module.exports = {
    addUser
}