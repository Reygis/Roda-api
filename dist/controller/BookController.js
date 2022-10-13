"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const bookRepository_1 = require("../repositories/bookRepository");
const class_validator_1 = require("class-validator");
const userRepository_1 = require("../repositories/userRepository");
class BookController {
}
exports.BookController = BookController;
_a = BookController;
BookController.create = async (req, res) => {
    const { isbnstring } = req.body;
    const users = req.user;
    const isbn = require('node-isbn');
    let book;
    try {
        book = await isbn.provider(['google']).resolve(isbnstring);
    }
    catch (error) {
        return res.status(404).send('ISBN não encontrado');
    }
    const newbook = await bookRepository_1.bookRepository.create({
        name: book.title,
        authors: book.authors,
        description: book.description,
        genres: book.categories,
        imageurl: book.imageLinks.thumbnail,
        pageCount: book.pageCount,
        users
    });
    const errors = await (0, class_validator_1.validate)(newbook);
    if (errors.length > 0) {
        return res.status(400).send(errors);
    }
    try {
        await bookRepository_1.bookRepository.save(newbook);
    }
    catch (error) {
        return res.status(400);
    }
    return res.status(201).json(book);
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
BookController.booksOfUser = async (req, res) => {
    const { iduser } = req.user;
    const books = await userRepository_1.userRepository.findOne({
        relations: {
            books: true,
        },
        where: {
            iduser: iduser
        }
    });
    return res.send(books === null || books === void 0 ? void 0 : books.books);
};
