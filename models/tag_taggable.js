module.exports = (sequelize, DataTypes) => {
    const Tag_taggable = sequelize.define("tag_taggable",{
        tagId:{
            type:DataTypes.INTEGER,
            unique:'tt_unique constraint',
        },
        taggableId:{
            type:DataTypes.INTEGER,
            unique:'tt_unique constraint',
            references:null
        },
        taggableType:{
            type: DataTypes.STRING,
            unique:'tt_unique constraint',
        }

    },{
        createdAt: "create_at",
        updatedAt: "modified_at",
    })
    return Tag_taggable;
}