const { options } = require("nodemon/lib/config");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      name: {
        type: DataTypes.STRING,
        //setter and getter:
        // set(value){
        //     this.setDataValue('name',value+' Data')
        // },
        get() {
          return this.getDataValue("name") + " XYZ  " + this.email;
        },
      },
      email: {
        type: DataTypes.STRING,
        //defaultValue:'test@gmail.com',
        allowNull: false,
        unique: true,
        // set(value){
        //     this.setDataValue('email',value+'@gmail.com')
        // }
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          /*  equals:{
                    args:'male',
                    msg:'please enter only Male'
                }, */
          isIn: {
            args: [["male", "female"]],
            msg: "please select from male/female",
          },

          //isIn:[['male','female']]
        },
      },
    },
    {
      //change table name:
      //tableName:'userdata',
      //timestamps:false
      /* updatedAt:false, 
        createdAt:false */
      /*  if you want updated at as well as  filed but not want to created at using this  updatedAt:false or created at : false 
        Note: if want to not required to add fileld created at and updated at field using timestemps:false */

      // change the name createdAt:
      createdAt: "create_at",
      updatedAt: "modified_at",
      // engine:'MYISAM'
      /* hooks:{
            beforeValidate:(user,options)=>{
              user.name = "dummy test data";

            },
            afterValidate:(user,options)=>{
                // user.name = "Ramesh";
            }
        } */
    }
  );
  //second way to create hook
  Users.addHook("beforeValidate", "customName", (user, options) => {
    user.name = "new hook";
  });

  Users.afterValidate('myHookLast',(user,options)=>{
    //   user.name = "new hook after";
      //remove hook
      Users.removeHook("beforeValidate","customName")
  })

  return Users;
};
