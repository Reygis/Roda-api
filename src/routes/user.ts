import { Router } from "express"
import { UserController } from "../controller/UserController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router()

router.post("/", UserController.create) //Rota para criar Users

router.put("/edit", authMiddleware, UserController.editUser) //Rota para editar o próprio usuario
router.get("/alluser", authMiddleware , UserController.listAllUser) //lista all users;
router.get("/:name", authMiddleware , UserController.userByName) //encontrar usuarios por nome;

export default router