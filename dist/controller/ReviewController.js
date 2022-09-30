"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const bookRepository_1 = require("../repositories/bookRepository");
const reviewRepository_1 = require("../repositories/reviewRepository");
class ReviewController {
}
exports.ReviewController = ReviewController;
_a = ReviewController;
ReviewController.create = async (req, res) => {
    const users = req.user;
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
