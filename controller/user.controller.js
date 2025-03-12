const User = require("../model/user.model");

//create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res
        .status(400)
        .json({ statusCode: 400, message: "All fields are required" });
    }

    const user = new User({ name, email, age });
    await user.save();

    res.status(201).json({ statusCode: 201, data: user });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Controller to get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res
        .status(404)
        .json({ statusCode: 404, message: "No users found" });
    }

    res.status(200).json({ statusCode: 200, data: users });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res
        .status(404)
        .json({ statusCode: 404, message: "User not found" });
    }

    res.status(200).json({ statusCode: 200, data: user });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ statusCode: 404, message: "User not found" });
    }

    res.status(200).json({
      statusCode: 200,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res
        .status(404)
        .json({ statusCode: 404, message: "User not found" });
    }

    res
      .status(200)
      .json({ statusCode: 200, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
