import { Book } from '../entities/Book';
import { bookRepository } from '../repositories/bookRepository';
import { Request, Response } from "express"
import { validate } from 'class-validator';
import { userRepository } from '../repositories/userRepository';

export class BookController {

    static create = async (req: Request, res: Response) => {
        const { isbnstring } = req.body
        const users = req.user;
        const isbn = require('node-isbn');

        let book
        try {
            book = await isbn.provider(['google']).resolve(isbnstring)
        } catch (error) {
            return res.status(404).send('ISBN não encontrado')            
        }

        const newbook = await bookRepository.create({
            name: book.title,
            authors: book.authors,
            description: book.description,
            genres: book.categories,
            imageurl: book.imageLinks.thumbnail,
            pageCount: book.pageCount,
            users
        })
        const errors = await validate(newbook)
        if (errors.length > 0) {
            return res.status(400).send(errors)
        }

        try {
            await bookRepository.save(newbook)
        } catch (error) {
            return res.status(400)
        }

        return res.status(201).json(book)

    }

    static listAllBooks = async (req: Request, res: Response) => {
        const books = await bookRepository.find({
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
        })
        return res.send(books)
    }

    static bookByName = async (req: Request, res: Response) => {
        const name: string = req.params.name

        let books: Book[]
        try {
            books = await bookRepository
                .createQueryBuilder("book")
                .where("book.name like :name", { name: `%${name}%` })
                .getMany();
        } catch (error) {
            return res.status(404).send("book not found")
        }

        return res.send(books)
    }

    static booksOfUser = async (req: Request, res: Response) => {
        const {iduser} = req.user;

        const books = await userRepository.findOne({
            relations: {
                books: true,
            },
            where: {
                iduser: iduser
            }
        })
        
        return res.send(books?.books)
    }
}