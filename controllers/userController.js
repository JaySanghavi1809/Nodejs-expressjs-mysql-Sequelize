var db = require("../models");
const users = require("../models/users");
const Users = db.users;
const { Sequelize, Op, QueryTypes} = require("sequelize");
var addUser = async (req, resp) => {
  //Insert Data Methods:
  // --------------------------------

  // let data = await Users.build({name:'Test',email:'test2@gmail.com'})
  // await data.save()

  // let data = await Users.create({name:'demo4',email:'demo23@gmail.com'})

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
  console.log(data.dataValues);

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
  // let data = await Users.create({name:'demo2',email:'demo12@gmail.com',gender:'female'})
  // console.log(data.id)

  //Update
  // let data = await Users.update({name:'final',email:'final123@gmail.com'},{
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
  // let datas = await Users.bulkCreate([
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
    data: 'ok',
  };
  resp.status(200).json(response);
};

var queryData = async (req, res) => {
  // let datas = await Users.create({name:'mit Singh',email:'mite@gmail.com',gender:'male'},{
  //   fields:['email','gender']
  // });

  

  //SELECT DATA Query:
  // -----------------------------
  // 1.select allData:
  // let data = await Users.findAll({})
  //   let data = await Users.findAll({
  //   attributes:[
  //     'name',
  //     ['email','EmailID'],//Rename
  //     'gender',
  //     [Sequelize.fn('Count',Sequelize.col('email')),'emailCount'], //count
  //     [Sequelize.fn('CONCAT',Sequelize.col('email'), ' ID'),'emailCount'] //CONCAT

  //   ]
  // });

  /*  2.select single-Record:
  let data = await Users.findOne({})
 */

  //Include -exclude:-
  //-------------------------------
  // let data = await Users.findAll({
  //   attributes: {
  //     exclude: ["create_at", "modified_at"],
  //     include: [
  //       [Sequelize.fn("CONCAT", Sequelize.col("name"), ' Singh'), "fullName"],
  //     ],
  //   },
  // });

  //------------- Condition--------------------//

  // let data = await Users.findAll({
  //   where:{
  //     id:2
  //   }
  // });

  //Operator:
  // 1.equal
  // let data = await Users.findAll({
  //   where:{
  //    id:{
  //      [Op.eq]:2
  //    },
  //    email:{
  //      [Op.eq]:'final123@gmail.com'
  //    }
  //   }
  // });

  //2.LIKE:
  // let data = await Users.findAll({
  //   where:{
  //    id:{
  //      [Op.eq]:5
  //    },
  //    email:{
  //      [Op.like]:'%@gmail.com%'
  //    }
  //   }
  // });

  //3. Greter then and orderBy,group by:
   let data = await Users.findAll({
    where:{
     id:{
       [Op.gt]:2
     },
     email:{
       [Op.like]:'%@gmail.com%'
     }
    },
    order:[
      ['name','DESC'],
      // ['email','DESC']
    ],
    group:['email','name'],
    limit:2,
    offset:1 //skip record
  });
 

  //simple display total count:
  //let data = await Users.count({ });


  let response = {
    data: data
  };
  res.status(200).json(response);
};

var finderData = async (req,res)=>{

  // let data = await Users.findAll({});
  // let data = await Users.findOne({});
  let data = await Users.findByPk(5)

  // let data = await Users.findAndCountAll({
  //   where:{
  //     email:'first2@gmail.com'
  //   }
  // })

  /* let [data, created] = await Users.findOrCreate({
    where:{name:'dummy2'},
    defaults:{
      email:'dummy2@gmail.com',
      gender:'male'
    }
  });

  let response = {
    data:data,
    add:created
  } */
  // let data = await Users.findAll({});
  // let data = await Users.create({name:'mahesh',email:'mahesh@gmail.com',gender:'male'})
  res.status(200).json(response)
}

var setterGetter = async (req,res)=>{
  //let data = await Users.create({name:'Test',email:'done',gender:'male'})
  let data = await Users.findAll({});
  let response = {
    data: data
  }
  res.status(200).json(response)
}

var validationCont = async (req,res)=>{
  try{
    let data = await Users.create({name:'Test',email:'test@gmail.com',gender:'male'})

  }catch(e){
    const messages = {};
    e.errors.forEach((error)=>{
      let message;
      //console.log(error)
      // switch (error.validatorKey){
      //   case 'not_unique':
      //     message = "Duplicate Email";
      //     break;

      //     case 'isIn':
      //       console.log(error.message)
      //       message = error.message;
      //       break;

      //       case 'equals':
      //         //console.log(error.message)
      //         message = error.message;
      //         break;
              
            

      // }
      message = error.message
      messages[error.path]=message

      console.log(messages)
       
    })

  }
  let response = {
    data:'me'
  }
  res.status(200).json(response);
}

var rawQuery = async(req,res)=>{
  // const users = await db.sequelize.query("Select * from users where gender = ? ",{
    // const users = await db.sequelize.query("Select * from users where gender IN(:gender)  ",{
      // const users = await db.sequelize.query("Select * from users where email LIKE :searchEmail  ",{
        const users = await db.sequelize.query("Select * from users where gender = $gender ",{
    type: QueryTypes.SELECT,
    // model:Users,
    // mapToModel:true,
    // raw:true
    //replacements:{gender:'male'}//gender =:gender
    // replacements:['male'] // gender = ?
    //replacements:{gender:['male','female']} //gender IN(:gender) 
    // replacements: {searchEmail: '%gmail.com'} // email LIKE :searchEmail
    // bind:{gender:'male'}


  });
  let response = {
    data: 'Row Query',record:users
  }
  res.status(200).json(response)
}



module.exports = {
  addUser,
  crudOperation,
  queryData,
  finderData,
  setterGetter,
  validationCont,
  rawQuery
};

