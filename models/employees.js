module.exports = (sequelize, DataTypes) => {
    const Employees = sequelize.define(
      "employee",
      {
        name: DataTypes.STRING,
        userId:DataTypes.INTEGER,
      },{
        paranoid: false,
        deletedAt: 'destroyTime',  //custom Field
        createdAt: "create_at",
        updatedAt: "modified_at",
      });
      return Employees;
  }
  

 