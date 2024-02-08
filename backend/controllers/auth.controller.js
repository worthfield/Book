import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { getErrorHandler } from "../utils/errorHandler.js";

const signUp = async (req, res,next) => {
    const {username,email,password}=req.body;
    if(username=== "" || email=== "" || password=== "" ){
        next(getErrorHandler(400,'All fields are required'))
    }
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser =User({username,email,password:hashedPassword})
    try {
        await newUser.save();
        return res.status(200).json({message:"User created successfully!!!"})
    } catch (error) {
        next(error)        
    }
  };
  export { signUp };
  