import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { getErrorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      next(getErrorHandler(404, "User not found."));
    }
    const matchPassword = bcryptjs.compareSync(password, user.password);
    if (!matchPassword) {
     return next(getErrorHandler(400, "Invalid password"));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const {password:pass,...rest}=user._doc
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  if(username=== "" || email=== "" || password=== "" ){
      next(getErrorHandler(400,'All fields are required'))
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    return res.status(200).json({ message: "User created successfully!!!" });
  } catch (error) {
    next(error);
  }
};
export { signUp, signin };
