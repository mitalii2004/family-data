module.exports = (Sequelize, sequelize, DataTypes) => {
  return sequelize.define(
    "userImages",
    {
      ...require("./cors")(Sequelize, DataTypes),
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: users,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      userImage: {
        type: DataTypes.BLOB,
        references: {
          model: users,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      tableName: "userImages",
    }
  );
};
