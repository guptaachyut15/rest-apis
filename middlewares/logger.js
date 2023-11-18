const fs = require("fs");

exports.logEnteries = (fileName) => {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\n${Date.now()}:${req.method}:${req.ip}:${req.path}`,
      (err, data) => {
        if (err) {
          console.log("Middleware logEntries failed:", err);
        }
        next();
      }
    );
  };
};
