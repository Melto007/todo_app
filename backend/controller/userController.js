// const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const { account } = require('../config/appwrite')
const { ID } = require('appwrite')

exports.registerUser = async (req, res) => {
    
        const { name, email, password, confirmPassword } = req.body

        if(!(name && email && password)) {
            throw new Error("All fields are required")
        }

        const userExists = await account.create(
            ID.unique(),
            name,
            email,
            password
        )
        
        userExists.then((resp) => {
            res.status(200).json({
                success: true,
                message: resp.message
            })
        }).catch((error) => {
            res.status(400).json({
                success: true,
                message: error.message
            })
        })

        // if(userExists) {
        //     throw new Error("User already exists")
        // }

        // const EMAILEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        // if(!email.match(EMAILEXP)) {
        //     throw new Error("Invalid Email Address")
        // }

        // var split = email.split("@");
        // var dot = split[1].indexOf(".");

        // if(dot === -1) {
        //     throw new Error("Invalid Email Address")
        // }

        // const PasswordEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

        // if(!password.match(PasswordEXP)) {
        //     throw new Error("password must be of 8 digits, contains atleast one uppercase, lowercase character, numbers and symbols ")
        // }

        // if(!(password === confirmPassword)) {
        //     throw new Error("Password and Confirm must be equal")
        // }

        // const hashPassword = await bcrypt.hash(password, 10)
        
        res.status(200).json({
            success: true,
            message: "User created successfully"
        })

    
}