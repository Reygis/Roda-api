"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const bookRepository_1 = require("../repositories/bookRepository");
class BookController {
}
exports.BookController = BookController;
_a = BookController;
BookController.create = async (req, res) => {
    const { name, genres, description, condition } = req.body;
    const users = req.user;
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
