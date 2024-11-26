import { v4 as uuidv4 }  from 'uuid'
import pedidoModel from '../models/pedidoModel.js'

const createPedidoController = async(req, res)=> {
    const newPedidoData = {
        id:uuidv4(),
        ...req.body
    }
    try {
        const pedido = await pedidoModel.createPedidoModel(newPedidoData)
        res.status(201).json(pedido)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getPedidoByIDController = async (req, res) => {
    const {id} = req.params
    try {
        const pedido = await pedidoModel.getPedidoById(id)
        const status = pedido.error ? 404 : 200
        res.status(status).json(pedido)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updatePedidoController = async(req, res)=> {
    const {id} = req.params
    try {
        const user = await pedidoModel.updatePedidoModel(id,req.body)
        const status = user.error ? 404 : 200
        res.status(status).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}


const deletePedidoController = async(req, res)=> {
    const {id} = req.params
    try {
        const pedido = await pedidoModel.deletePedidoID(id)
        const status = pedido.error ? 404 : 200
        res.status(status).json(pedido)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {
    deletePedidoController,
    updatePedidoController,
    getPedidoByIDController,
    createPedidoController
}