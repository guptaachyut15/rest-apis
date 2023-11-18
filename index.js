require("dotenv").config();
const express = require("express");
const { connect } = require("./connection");
const apiUserRouter = require("./routes/apiUsers");
const userRouter = require("./routes/users");
const { logEnteries } = require("./middlewares/logger");
const { PORT, connectionString, loggerPath } = require("./config");

const app = express();
connect(connectionString)
  .then(() => console.log("Mongodb connected!"))
  .catch((err) => console.log("Cant connect to mongodb", err));

app.use(express.urlencoded({ extended: false }));
app.use(logEnteries(loggerPath));

app.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});

app.use("/users", userRouter);
app.use("/api/users", apiUserRouter);
