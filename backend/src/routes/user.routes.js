import express from 'express'
import { loginUser, registerUser } from '../controllers/user.controller.js'
const router = express.Router()

router.post('/registeruser', registerUser)
router.post('/loginuser', loginUser)

export default router