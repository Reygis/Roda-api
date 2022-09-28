import { Router } from "express"
import { BookController } from "../controller/BookController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router()

router.post("/create", authMiddleware, BookController.create) // criar Livro para troca
router.get("/allbooks", authMiddleware , BookController.listAllBooks) //lista todos os livros;
router.get("/:name", authMiddleware , BookController.bookByName) //encontrar livro por parte do nome;

export default router