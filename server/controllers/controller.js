const User = require("../models/schema");

const addUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    // console.log(req.body);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // console.log(existingUser)
      console.log("--> User Login : ", name);
      return res
        .status(201)
        .json({ message: "User exists", user: existingUser });
    }

    const newUser = new User({
      name,
      email,
      phone,
    });

    await newUser.save();
    console.log("--> New User : ", name);
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addDetails = async (req, res) => {
  try {
    const { userId, guestCount, venues } = req.body;

    if (typeof guestCount !== "number" || guestCount < 1)
      return res.status(400).json({ message: "Invalid guest count" });

    if (!Array.isArray(venues) || venues.length > 10)
      return res
        .status(400)
        .json({ message: "Invalid venues list (max 10 venues)" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.guestCount = guestCount;
    user.venues = venues;

    await user.save();
    res
      .status(200)
      .json({ message: "User details updated successfully", user });
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addUser,
  addDetails,
};
