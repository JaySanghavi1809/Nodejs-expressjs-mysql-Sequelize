const {Sequelize,DataTypes} = require('sequelize')

//connection
const sequelize = new Sequelize('demo_sequelize','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{max:5,min:0,idle:10000}
})

sequelize.authenticate()
.then(()=>{
    console.log("Connected")
})
.catch(err=>{
    console.log("Error"+err)
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize,DataTypes);
//create table
// db.sequelize.sync()
// .then(()=>{
//     console.log("yes re sync")
// })
//Drop table
db.sequelize.sync({force:false,match:/demo_sequelize$/})
.then(()=>{
    console.log("yes re sync")
})