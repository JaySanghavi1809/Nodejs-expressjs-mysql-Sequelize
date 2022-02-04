var db = require("../models");
const users = require("../models/users");
const Users = db.users;
const { Sequelize } = require("sequelize");
var addUser = async (req, resp) => {
  //Insert Data Methods:
  // --------------------------------

  // let data = await Users.build({name:'Test',email:'test2@gmail.com'})
  // await data.save()

  //let data = await Users.create({name:'demo3',email:'demo22@gmail.com'})

  //update value Method:
  // -------------------------------------
  // data.name = 'dummy'
  // data.save();

  //delete Method:
  // ------------------------------
  //  data.destroy();
  // console.log(data.dataValues)

  //get data value:
  // --------------------------------
  // console.log(data.dataValues);

  // reload:
  // -----------------------------
  // data.name = 'dummy'
  // data.reload()

  let response = {
    data: "ok",
  };

  resp.status(200).json(response);
};

//CRUD Operations:-
// ------------------------------------------------------
var crudOperation = async (req, resp) => {
  //Insert Data:-
  // let data = await Users.create({name:'demo2',email:'demo123@gmail.com',gender:'male'})
  // console.log(data.id)

  //Update
  // let data = await Users.update({name:'test',email:'test123@gmail.com'},{
  //     where:{
  //         id:2
  //     }
  // })

  //Delete
  // let data = await Users.destroy({
  //     where:{
  //         id:3
  //     }
  // })

  //truncate
  // let data = await Users.destroy({
  //     truncate:true
  // })

  //Bulk insert
  // let data = await Users.bulkCreate([
  //     {name:'first',email:'first@gmail.com',gender:'male'},
  //     {name:'first2',email:'first2@gmail.com',gender:'female'},
  //     {name:'first3',email:'first3@gmail.com',gender:'female'},
  //     {name:'first4',email:'first4@gmail.com',gender:'male'}
  // ])

  //find:
  // findAll
  // let data = await Users.findAll({})

  //findOne
  //let data = await Users.findOne({});

  let response = {

  };
  resp.status(200).json(response);
};

//insert data permission which you want to insert:
var queryData = async (req, resp) => {
  let data = await Users.create({name:'Rohan',email:'rohan@gmail.com',gender:'male'},{
      fields:['email','gender']
  })

  //SELECT:
  /*  let data = await Users.findAll({
        attributes:[
            'name',
            ['email','emailID'], //rename
            'gender',
            //count:
            // [Sequelize.fn('Count',Sequelize.col('email')),'emailCount']
            // Concat:
            // [Sequelize.fn('CONCAT',Sequelize.col('email'),' ID'),'emailCount'],
            

        ]
    }) */
  // let data = await Users.findOne({})

  //include - exclude
  /* let data = await Users.findAll({
    attributes: {
      exclude: ["create_at", "modified_at"],
      include: [
        [Sequelize.fn("CONCAT", Sequelize.col("name"), " Singh"), "fullname"],
      ],
    },
  }); */

  //----------- condition ---------------- //
//    let data= await Users.findAll({
//     attributes: {
//       exclude: ["create_at", "modified_at"],
//       include: [
//         [Sequelize.fn("CONCAT", Sequelize.col("name"), " Singh"), "fullname"],
//       ],
//     },
//   }); 

  let response = {
    data: data,
  };
  resp.status(200).json(response);
};

module.exports = {
  addUser,
  crudOperation,
  queryData,
};
