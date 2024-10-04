const express = require("express");
const app = express();
const port = 1234;
require("./dbconnection").connectionDB();
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
