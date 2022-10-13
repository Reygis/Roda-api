import { Router } from "express"
import { GroupController } from "../controller/GroupController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router()

router.post("/create", authMiddleware, GroupController.create) // criar grupo
router.get("/allgroups", authMiddleware , GroupController.listAllGroups) //lista todos os grupos;
router.get("/mygroups", authMiddleware , GroupController.groupsOfUser) //lista todos os grupos do usuario logado;

export default router