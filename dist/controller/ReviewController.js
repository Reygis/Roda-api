"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const userRepository_1 = require("../repositories/userRepository");
const bookRepository_1 = require("../repositories/bookRepository");
const reviewRepository_1 = require("../repositories/reviewRepository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class ReviewController {
}
exports.ReviewController = ReviewController;
_a = ReviewController;
ReviewController.create = async (req, res) => {
    var _b;
    const { authorization } = req.headers;
    if (!authorization) {
        return;
    }
    const token = authorization.split(" ")[1];
    let iduser;
    try {
        const jwtPayload = jsonwebtoken_1.default.verify(token, (_b = process.env.JWT_PASS) !== null && _b !== void 0 ? _b : "");
        iduser = jwtPayload.userId;
    }
    catch (error) {
        return res.status(401).send;
    }
    const users = await userRepository_1.userRepository.findOneBy({ iduser });
    if (!users)
        return res.status(404).json({ message: 'User not found' });
    const iduserbook = parseInt(req.params.bookid);
    const books = await bookRepository_1.bookRepository.findOneBy({ iduserbook });
    if (!books)
        return res.status(404).json({ message: 'book not found' });
    const { content, rating, tags } = req.body;
    try {
        const review = reviewRepository_1.reviewRepository.create({ content, rating, tags, users, books });
        await reviewRepository_1.reviewRepository.save(review);
    }
    catch (error) {
        return res.status(400);
    }
    return res.status(201).json('review Created');
};
