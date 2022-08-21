const { Router } = require("express");
const router = Router();

const {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("", setUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
