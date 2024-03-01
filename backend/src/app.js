import express from 'express'
import { createUser } from './controllers/user.controller.js'

const app = express()

// to ensure that express understands json & to set limit for incoming json data.
app.use(express.json({limit:"16kb"})) 

// to ensure that express understands all the data coming through url's.
app.use(express.urlencoded({extended: true, limit:"16kb"})) 

app.post('/createuser', createUser)

export default app
