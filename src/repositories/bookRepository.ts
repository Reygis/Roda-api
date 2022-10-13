import { Book } from '../entities/Book';
import { AppDataSource } from '../data-source'

export const bookRepository = AppDataSource.getRepository(Book)