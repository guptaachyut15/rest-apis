const express = require("express");
const router = express.Router();
const {
  handleGetUsers,
  handleGetUserById,
  handleCreateUser,
  handleDeleteUserById,
  handlePatchUserbyId,
} = require("../controllers/apiUsers");

router.route("/").get(handleGetUsers).post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handlePatchUserbyId)
  .delete(handleDeleteUserById);

module.exports = router;
