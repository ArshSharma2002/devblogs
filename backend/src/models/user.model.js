import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema  = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    refreshtoken:{
        type: String
    },
    isAdmin:{
        type: Boolean,
        default: false
    }

}, {timestamps: true})


userSchema.pre("save", async function(next){
    if (this.isModified("password")) {                // here, 'this' refers to the userSchema.
        this.password = await bcrypt.hash(this.password,10)
    }
    next()
})

export const User = mongoose.model("User", userSchema)