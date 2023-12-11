import { AsyncHandler } from "../utils/AsyncHandler.js";
import{ApiError} from '../utils/ApiError.js';
import {User} from '../models/User.model.js';
import ApiResponse from "../utils/ApiResponse.js";
import { Cloudinary } from "../utils/Cloudinary.js";

const registerUser = AsyncHandler(async (req, res) => {
   //steps for registering a user
   //1. get the data from the request body
   //2. validate the data
   //3. check if the user already exists
   //4.check for images,avatar
   //5.upload them into a cloundinary,avtar
   //6.create a user object
   //7.remove password and the refresh token from the user object
   //8.return response
    const {username,email,fullName,password}=req.body
    if ([username,email,fullName,password].some((includes=>{includes===undefined||includes===null}))) {
      throw new ApiError(400,"Please provide all the required fields")
    }
     const existeduser=User.findone(
      {$or:[{username},{email}]
    })
    if(existeduser){
      throw new ApiError(409,"User already exists")
    }
    const avatarlocalpath=req.files?.avatar[0]?.path
    const coverImagelocalpath=req.files?.coverImagelocalpath[0]?.path
    //optional chaining
    if(!avatarlocalpath){
      throw new ApiError(400,"Please provide an avatar")
    }
    const avatar=await Cloudinary(avatarlocalpath)
    if(!avatar){
         throw new ApiError(500,"Something went wrong")
    }
    const user =await User.create({
      email,
      fullName,
      password,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      username: username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
      )
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user")
    }
    return res.status(201).json(
      new ApiResponse(201, "User registered successfully", createdUser)
    )

});

export default registerUser;
