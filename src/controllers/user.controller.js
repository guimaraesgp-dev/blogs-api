const userLogin = require('../services/user.service');

const getLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userLogin.getUsers(email, password);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  res.status(200).json({ token: user });
};

const createUser = async (req, res) => {
  const user = await userLogin.createUser(req.body);
  if (user) { return res.status(201).json({ token: user }); }
  res.status(409).json({ message: 'User already registered' });
};

const getAlluser = async (_req, res) => {
  const allUsers = await userLogin.getAlluser();
  res.status(200).json(allUsers);
};  

const getUserById = async (req, res) => {
  const { id } = req.params;
  const result = await userLogin.getUserById(id);
  if (result) { return res.status(200).json(result); } 
  res.status(404).json({ message: 'User does not exist' });
};

module.exports = {
  getLogin,
  createUser,
  getAlluser,
  getUserById,
};