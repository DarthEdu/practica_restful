
import { v4 as uuidv4 } from "uuid";
import UserModel from "../models/userModel.js";


const createClienteController = async(req, res)=> {
    const newClienteData = {
        id:uuidv4(),
        ...req.body
    }
    try {
        const cliente = await UserModel.createClienteModel(newClienteData)
        res.status(201).json(cliente)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getUserByIDController = async (req, res) => {
    const {id} = req.params
    try {
        const user = await UserModel.getUserById(id)
        const status = user.error ? 404 : 200
        res.status(status).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateUserController = async(req, res)=> {
    const {id} = req.params
    try {
        const user = await UserModel.updateUserModel(id,req.body)
        const status = user.error ? 404 : 200
        res.status(status).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}


const deleteUserController = async(req, res)=> {
    const {id} = req.params
    try {
        const user = await UserModel.deleteUserID(id)
        const status = user.error ? 404 : 200
        res.status(status).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export{
    createClienteController,
    getUserByIDController,
    updateUserController,
    deleteUserController
}
