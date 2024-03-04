import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"

const verifyJWT = async(req, res, next)=>{
    try {
        
        const token = req.cookies?.accesstoken || req.header("Authorization")?.replace("Bearer ","")
        console.log("Token Val : " + token);
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request !!!")
        }

        console.log("got token .....");
    
        const decodedInfo = jwt.verify(token, process.env.ACCESSTOKEN_SECRET)
    
        const user = await User.findById(decodedInfo?._id).select("-password -refreshtoken")
    
        if (!user) {
            throw new ApiError(401, "Invalid access token !!!")
        }
    
        req.user = user
    
        next()

    } catch (error) {
        throw new ApiError(401,error?.message || "Auth Middleware error")
    }
}

export {verifyJWT}