"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const userRepository_1 = require("../repositories/userRepository");
const bookRepository_1 = require("../repositories/bookRepository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class BookController {
}
exports.BookController = BookController;
_a = BookController;
BookController.create = async (req, res) => {
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
    const { name, genres, description, condition } = req.body;
    try {
        const book = bookRepository_1.bookRepository.create({ name, genres, description, condition, users });
        await bookRepository_1.bookRepository.save(book);
    }
    catch (error) {
        return res.status(400);
    }
    return res.status(201).json('book Created');
};
BookController.listAllBooks = async (req, res) => {
    const books = await bookRepository_1.bookRepository.find({
        relations: {
            users: true
        },
        select: {
            users: {
                iduser: true,
                name: true,
                email: true,
                bio: true,
                imgurl: true
            }
        }
    });
    return res.send(books);
};
BookController.bookByName = async (req, res) => {
    const name = req.params.name;
    let books;
    try {
        books = await bookRepository_1.bookRepository
            .createQueryBuilder("book")
            .where("book.name like :name", { name: `%${name}%` })
            .getMany();
    }
    catch (error) {
        return res.status(404).send("book not found");
    }
    return res.send(books);
};
