module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(
      "students",
      {
        name: DataTypes.STRING,
      },
      {
          underscored:true
          //tableName:'student'
        /* createdAt: "create_at",
        updatedAt: "modified_at", */
      }
    );
    return Student;
  };
  