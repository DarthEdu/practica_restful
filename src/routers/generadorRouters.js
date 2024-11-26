import { Router } from "express";
import {
  createGeneradorController,
  getAllGeneradorController,
  getGeneradorByIDController,
  getPedidoByIDController,
  updateGeneradorController,
  updatePedidoController,
  deleteGeneradorController,
  deletePedidoController,
  createPedidoController
} from "../controllers/generadorController.js";

import { verify } from "../middlewares/auth.js";


const router = Router();


//publicas
router.get("/generador", getAllGeneradorController);
router.get("/generador/:id", getGeneradorByIDController)
router.get("/pedidos/:id", getPedidoByIDController)
router.post('/generador', createGeneradorController);
router.post("/pedidos", createPedidoController)

//privadas
router.put("/generador/:id", verify, updateGeneradorController);
router.put("/pedidos/:id", verify, updatePedidoController);

router.delete("/generador/:id", verify, deleteGeneradorController)
router.delete("/pedidos/:id", verify, deletePedidoController)

export default router;
