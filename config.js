require("dotenv").config();

const PORT = Number(process.env.PORT);
const connectionString = process.env.CONNECTION_STRING;
const loggerPath = process.env.LOGGER_PATH;

module.exports = {
  PORT,
  connectionString,
  loggerPath,
};
