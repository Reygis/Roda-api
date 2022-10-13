"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReviewController_1 = require("../controller/ReviewController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/create/:bookid", authMiddleware_1.authMiddleware, ReviewController_1.ReviewController.create); // criar Livro para troca
exports.default = router;
