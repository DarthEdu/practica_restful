
import { v4 as uuidv4 }  from 'uuid'
import GeneradorModel from '../models/generadorModel.js'


const getAllGeneradorController = async (req, res) => {
    const generador = await GeneradorModel.getAllGeneradorModel()   
    res.status(200).json(generador)
}

const createGeneradorController = async(req, res)=> {
    const newGeneradorData = {
        id:uuidv4(),
        ...req.body
    }
    try {
        const generador = await GeneradorModel.createGeneradorModel(newGeneradorData)
        res.status(201).json(generador)
    } catch (error) {
        res.status(500).json(error)
    }
}




const createPedidoController = async(req, res)=> {
    const newPedidoData = {
        id:uuidv4(),
        ...req.body
    }
    try {
        const pedido = await GeneradorModel.createPedidoModel(newPedidoData)
        res.status(201).json(pedido)
    } catch (error) {
        res.status(500).json(error)
    }
}




const getGeneradorByIDController = async (req, res) => {
    const {id} = req.params
    try {
        const generador = await GeneradorModel.getGeneradorById(id)
        const status = generador.error ? 404 : 200
        res.status(status).json(generador)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getPedidoByIDController = async (req, res) => {
    const {id} = req.params
    try {
        const pedido = await GeneradorModel.getPedidoById(id)
        const status = pedido.error ? 404 : 200
        res.status(status).json(pedido)
    } catch (error) {
        res.status(500).json(error)
    }
}


const updateGeneradorController = async(req, res)=> {
    const {id} = req.params
    try {
        const user = await GeneradorModel.updaGeneradorModel(id,req.body)
        const status = user.error ? 404 : 200
        res.status(status).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}
const updatePedidoController = async(req, res)=> {
    const {id} = req.params
    try {
        const user = await GeneradorModel.updatePedidoModel(id,req.body)
        const status = user.error ? 404 : 200
        res.status(status).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}


const deleteGeneradorController = async(req, res)=> {
    const {id} = req.params
    try {
        const generador = await GeneradorModel.deleteGeneradorID(id)
        const status = generador.error ? 404 : 200
        res.status(status).json(generador)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deletePedidoController = async(req, res)=> {
    const {id} = req.params
    try {
        const pedido = await GeneradorModel.deletePedidoID(id)
        const status = pedido.error ? 404 : 200
        res.status(status).json(pedido)
    } catch (error) {
        res.status(500).json(error)
    }
}


export{
    getAllGeneradorController,
    createGeneradorController,
    createPedidoController,
    updateGeneradorController,
    updatePedidoController,
    getGeneradorByIDController,
    getPedidoByIDController,
    deleteGeneradorController,
    deletePedidoController,
}