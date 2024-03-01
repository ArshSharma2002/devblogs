import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema({
    publisher:{
        type: Schema.Types.ObjectId,
        ref: "User",
        index: true
    },
    title:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String,
        unique: true,
        required: true
    },
    tag:{
        type: String,
        unique: true
    },
    source:{
        type: String,
    }

})

export const Blog = mongoose.model("Blog", blogSchema)