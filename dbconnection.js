const Sequelize = require("sequelize");
const sequelize = new Sequelize("cqlsys1", "root", "mitali@202018", {
  host: "localhost",
  dialect: "mysql",
});
const connectionDB = async () => {
  await sequelize
    .authenticate()
    .then(() => {
      sequelize.sync({ alert: false });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  connectionDB: connectionDB,
  sequelize: sequelize,
};
