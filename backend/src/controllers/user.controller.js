import {User} from '../models/user.model.js'

const createUser = async (req, res) =>{
    const {username, fullname, email, password, refreshtoken} = req.body

    const existingUser = User.findOne({username})

    if (existingUser) {
        console.log("User Already exists !!!") // exit the process !!!
    }

    const newUser = await User.create({
        username,
        fullname, 
        email,
        password, 
        refreshtoken
    })

    if (!newUser) {
        console.log("Erro creating user !!!");
    }

    console.log(newUser)

    return res.status(200).json(newUser)
}

export {createUser}