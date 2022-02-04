module.exports = (sequelize,DataTypes)=>{
    const Users = sequelize.define("users",{
        name:DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            defaultValue:'test@gmail.com'
        },
        gender:{
            type:DataTypes.STRING
        }
    },{
        //change table name:
        //tableName:'userdata',
        //timestamps:false 
        /* updatedAt:false, 
        createdAt:false */
       /*  if you want updated at as well as  filed but not want to created at using this  updatedAt:false or created at : false 
        Note: if want to not required to add fileld created at and updated at field using timestemps:false */

        // change the name createdAt:
        createdAt:'create_at',
        updatedAt:'modified_at',
        // engine:'MYISAM'
    });
    return Users;
}