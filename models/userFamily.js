module.exports = (Sequelize, sequelize, DataTypes) => {
  return sequelize.define(
    "userFamily",
    {
      ...require("./cors")(Sequelize, DataTypes),
      userFamilyName: DataTypes.STRING(255),
      allowNull: false,
    },
    {
      tableName: "userFamily",
    }
  );
};
