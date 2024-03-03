import { User } from '../models/user.model.js'
import { ApiError } from '../utility/ApiError.js'
import { ApiResponse } from '../utility/ApiResponse.js'

const generateTokens = async (id) => {
    try {
        const user = User.findById(id)
        if (!user) {
            throw new ApiError(400, "User doesn't exist !!!")
        }
        const accesstoken = await user.generateAccessToken()
        const refreshtoken = await user.generateRefreshToken()

        return { accesstoken, refreshtoken }

    } catch (error) {
        throw new ApiError(500, "Internal Server Error !!!")
    }
}

const registerUser = async (req, res) => {
    try {

        const { username, fullname, email, password } = req.body

        if (!(username && email && password && fullname)) {
            throw new ApiError(400, "Email & User name is required !!!")
        }

        const existingUser = User.findOne({
            $or: [{ username }, { email }]
        })

        if (existingUser) {
            throw new ApiError(400, "User already exists !!!")
        }

        const newUser = await User.create({
            username,
            fullname,
            email,
            password
        })

        const createdUser = await User.findById(newUser._id).select("-password -refreshtoken")

        if (!createdUser) {
            throw new ApiError(404, "User not found !!!")
        }

        return res.this.status(200).json(new ApiResponse(200, createdUser, "User registration Success !"))

    } catch (error) {
        console.error(error)
        throw new ApiError(500, "Internal Server Error !!!")
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        if (!(username && email && password)) {
            throw new ApiError(400, "User credentials required !!!")
        }

        const verifyUser = await User.find({
            $or: [{ username }, { email }]
        })

        if (!verifyUser) {
            throw new ApiError(400, "Wrong Credentials !!!")
        }

        const checkPassword = await verifyUser.isPasswordCorrect(password)

        if (!checkPassword) {
            throw new ApiError(400, "Wrong Password !!!")
        }

        const { accesstoken, refreshtoken } = generateTokens(verifyUser._id)

        verifyUser.refreshtoken = refreshtoken

        await verifyUser.save({ validateBeforeSave: false })

        const loggedInUser = await User.findById(verifyUser._id).select("-password -refreshtoken")

        // options for cookies for security so, that only server can modify these cookies.
        const options = {
            httpOnly: true,
            secure: true
        }

        return res.status(200).cookie("accessToken", accesstoken, options).cookie("refreshtoken", refreshtoken, options).json(
            new ApiResponse(200, {
                user: loggedInUser,
                accesstoken,
                refreshtoken
            },
                "User logged in Successfully")
        )


    } catch (error) {
        console.error(error)
        throw new ApiError(500, "Internal Server Error !!!")
    }
}

const logoutUser = async (req, rs) => {
    try {
        await User.findByIdAndUpdate(req.user._id, {
            // clearing refreshToken
            $set: { refreshToken: undefined }
        },
            {
                // so, that response will contain refreshToken: undefined (i.e. its new value)
                new: true
            })

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(new ApiResponse(200, {}, "User logged out Successfully !!!"))

    } catch (error) {
        throw new ApiError(500, "Internal Server Error !!!")
    }
}

export { registerUser, loginUser, logoutUser }