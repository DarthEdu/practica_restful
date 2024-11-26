import { Router } from "express";
import {
  getPedidoByIDController,
  updatePedidoController,
  deletePedidoController,
  createPedidoController
} from "../controllers/pedidoController.js";
import { verify } from "../middlewares/auth.js";

const route=Router()

//publicas
route.get('/pedidos/:id', getPedidoByIDController)
route.post("/pedidos", createPedidoController)

//privadas
route.delete('/pedidos/:id', verify, deletePedidoController)
route.put('/pedidos/:id', verify, updatePedidoController)

export default route