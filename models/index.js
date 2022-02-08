const {Sequelize,DataTypes} = require('sequelize')

//connection
const sequelize = new Sequelize('demo_sequelize','root','',{
    host:'localhost',
    dialect:'mysql',
    logging:true,
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

db.sequelize.sync({force:false,match:/demo_sequelize$/})
.then(()=>{
    console.log("yes re sync")
})
db.users = require('./users')(sequelize,DataTypes);
db.posts = require('./posts')(sequelize,DataTypes);

db.tags = require('./tags')(sequelize,DataTypes);
db.post_tag = require('./post_tag')(sequelize,DataTypes);


//--------- one to one --------------//
db.users.hasOne(db.posts,{foreignKey:'user_id',as:'postDetails'}); //default userid  (change keyName)
//hasOne : users to posts relations 
db.posts.belongsTo(db.users,{foreignKey:'user_id', as:"UserInfo"});//alise model name
//belongsTo: posts to users relations 

//--------- one to Many --------------//
db.users.hasMany(db.posts);
db.posts.belongsTo(db.users,{foreignKey:'user_id', as :'userInfo' });

//------------ Many to Many------------//
db.posts.belongsToMany(db.tags,{through:'post_tag'});
db.tags.belongsToMany(db.posts,{through:'post_tag'});

db.student = require('./student')(sequelize,DataTypes);

//--------------- Scopes---------------//
db.users.addScope('checkStatus',{
    where:{
        status:1
    }
})

db.users.addScope('checkGender',{
    where:{
        gender:'male'
    }
})

db.users.addScope('includePost',{
    include:{
        model:db.posts,
        attributes:['title','content']
    }
});

db.users.addScope('selectusers',{
    attributes:['name','email']
});

db.users.addScope('limitCheck',{
    limit:2
});



module.exports = db;

