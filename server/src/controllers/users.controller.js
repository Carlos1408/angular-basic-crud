const { findByIdAndUpdate } = require("../models/user");
const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.find();
  console.log(users);
  res.json(users);
};

const getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  console.log(user);
  res.json(user);
};

const setUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  console.log(newUser);
  res.json(newUser);
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  console.log(user);
  res.json(user)
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  console.log(user);
  res.json(user);
};

module.exports = {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
};
