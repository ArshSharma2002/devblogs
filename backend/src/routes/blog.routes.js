import express from "express"
import { createBlogs, deleteBlogById, getBlogById, getBlogs, updateBlogById } from "../controllers/blog.controller.js"
import {verifyJWT} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/',verifyJWT, getBlogs)
router.get('/:blogid', verifyJWT, getBlogById)
router.post('/create',verifyJWT, createBlogs)
router.put('/update/:blogid',verifyJWT, updateBlogById)
router.delete('/delete/:blogid',verifyJWT, deleteBlogById)


export default router

