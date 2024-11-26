import { Router } from "express";
import {
  createGeneradorController,
  getAllGeneradorController,
  getUserByIDController,
  getGeneradorByIDController,
  getPedidoByIDController,
  updateUserController,
  updateGeneradorController,
  updatePedidoController,
  deleteGeneradorController,
  deletePedidoController,
  deleteUserController,
  createClienteController,
  createPedidoController
} from "../controllers/generadorController.js";

import { verify } from "../middlewares/auth.js";


const router = Router();


//publicas
router.get("/generador", getAllGeneradorController);
router.get("/users/:id", getUserByIDController);
router.get("/generador/:id", getGeneradorByIDController)
router.get("/pedidos/:id", getPedidoByIDController)
router.post('/generador', createGeneradorController);
router.post("/users", createClienteController)
router.post("/pedidos", createPedidoController)

//privadas
router.put("/users/:id", verify, updateUserController);
router.put("/generador/:id", verify, updateGeneradorController);
router.put("/pedidos/:id", verify, updatePedidoController);
router.delete("/users/:id", verify, deleteUserController);
router.delete("/generador/:id", verify, deleteGeneradorController)
router.delete("/pedidos/:id", verify, deletePedidoController)

export default router;
