"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookController_1 = require("../controller/BookController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/create", authMiddleware_1.authMiddleware, BookController_1.BookController.create); // criar Livro para troca
router.get("/allbooks", authMiddleware_1.authMiddleware, BookController_1.BookController.listAllBooks); //lista todos os livros;
router.get("/mybooks", authMiddleware_1.authMiddleware, BookController_1.BookController.booksOfUser); //lista todos os livros de um usuaio;
router.get("/:name", authMiddleware_1.authMiddleware, BookController_1.BookController.bookByName); //encontrar livro por parte do nome;
exports.default = router;
