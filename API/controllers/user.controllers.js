const { message } = require("statuses")
const USER_MODEL = require("../models/user.model")

const createUser = async (req, res) => {
    const { UserName, email, phone, password } = req.body
    try {
        const user = await USER_MODEL.create({
            UserName: UserName,
            email: email,
            phone: phone,
            password: password,

        })
        res.status(200).json({
            success: true,
            message: "user created",
            data: user,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })
    }
}
const FindUser = async (req, res) => {
    const { UserName } = req.body
    try {
        const user = await USER_MODEL.find({ UserName })
        res.status(200).json({
            success: true,
            data: user,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message

        })
    }
}


const DeletUser = async (req, res) => {
    const { phone } = req.body
    try {
        const user = await USER_MODEL.deleteOne({ phone })
        res.status(200).json({
            success: true,
            data: user,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message

        })
    }
}
const Login = async (req, res) => {
    const { phone, password } = req.body
    try {
        const user = await USER_MODEL.findOne({ phone, password })
        res.status(200).json({
            success: true,
            data: user,
            message: "You have successfully logged in"
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message

        })
    }
}
const updateuser = async (req, res) => {
    const { phone, password } = req.body
    try {
        const user = await USER_MODEL.findOneAndUpdate({ phone }, { password }, { new: true })
        res.status(200).json({
            success: true,
            data: user,

        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,

            message: error.message

        })
    }
}

module.exports =

    module.exports = {
        createUser,
        DeletUser,
        FindUser,
        Login,
        updateuser
    }