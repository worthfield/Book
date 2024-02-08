import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

const signUp = async (req, res) => {
    const {username,email,password}=req.body;
    if(username=== "" || email=== "" || password=== "" ){
        return res.status(400).json({message:"All fields are required"})
    }
    const hashedPassword = bcryptjs.hashSync(password,16);
    const newUser =User({username,email,password:hashedPassword})
    try {
        await newUser.save();
        return res.status(200).json({message:"User created successfully!!!"})
    } catch (error) {
        return res.status(400).json({message:error})
        
    }
  };
  export { signUp };
  