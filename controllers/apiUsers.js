const user = require("../models/user");

exports.handleGetUsers = async (req, res) => {
  return res.status(200).json(await user.find({}));
};

exports.handleCreateUser = async (req, res) => {
  let data = req.body;
  let result = await user.create({
    firstName: data.firstname,
    lastName: data.lastName,
    email: data.email,
    jobTitle: data.jobTitle,
    gender: data.gender,
  });
  return res.status(201).json({ message: "success", id: result._id });
};

exports.handleGetUserById = async (req, res) => {
  let id = req.params.id;
  return res.status(200).json(await user.findById(id));
};

exports.handlePatchUserbyId = async (req, res) => {
  const id = req.params.id;
  let data = req.body;
  await user.findByIdAndUpdate(id, data);
  return res.status(200).json({ message: "success" });
};

exports.handleDeleteUserById = async (req, res) => {
  const id = req.params.id;
  await user.findByIdAndDelete(id);
  return res.status(202).json({ message: "success" });
};
