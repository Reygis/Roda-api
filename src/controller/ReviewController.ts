import { bookRepository } from '../repositories/bookRepository';
import { reviewRepository } from '../repositories/reviewRepository';
import { Request, Response } from "express"

export class ReviewController {
    
	static create = async (req: Request, res: Response) => {
        const users = req.user

        const iduserbook  = parseInt(req.params.bookid);
        const books = await bookRepository.findOneBy({iduserbook});
        if (!books) return res.status(404).json({message: 'book not found'})
        
        const { content, rating, tags } = req.body;

        try {
            const review = reviewRepository.create({ content, rating, tags, users, books })
            await reviewRepository.save(review)
        } catch (error) {
            return res.status(400)
        }

        return res.status(201).json('review Created')
       
    }	
}
