import { Router } from "express"
import { ReviewController } from "../controller/ReviewController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router()

router.post("/create/:bookid", authMiddleware, ReviewController.create) // criar Livro para troca

export default router