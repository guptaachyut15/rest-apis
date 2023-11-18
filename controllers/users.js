const user = require("../models/user");

exports.handleGetUsers = async (req, res) => {
  let users = await user.find({});
  const html = `<ul>
      ${users.map((u) => `<li>${u.firstName} - ${u.email}</li>`).join("")}
      </ul>`;
  return res.status(200).send(html);
};
